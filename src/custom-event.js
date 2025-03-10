// Internet Explorer 9 and higher
_CustomEventPolyfill();

const TARGET = document;
const EVENTS = {};

/**
 * @param {String} eventName
 * @param {Object} detail
 */
function _dispatchEvent(eventName, detail) {
	const event = new CustomEvent(eventName, {
		detail: detail
	});

	TARGET.dispatchEvent(event);
}

function _CustomEventPolyfill() {
	if (typeof window.CustomEvent === 'function') {
		return;
	}

	function CustomEvent(event, params) {
		const evt = document.createEvent('CustomEvent');

		params = params || { bubbles: false, cancelable: false, detail: undefined };
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
}

module.exports = {
	/**
	 * @param {String} eventName
	 * @param {Function} callback
	 */
	on: function (eventName, callback) {
		if (EVENTS[eventName]) {
			EVENTS[eventName].callbacks.push(callback);
		} else {
			EVENTS[eventName] = {
				callbacks: [callback]
			};
		}

		TARGET.addEventListener(eventName, callback);
	},

	/**
	 * @param {String} eventName
	 */
	off: function (eventName, callbackToRemove) {
		if (!EVENTS[eventName]) {
			return;
		}

		EVENTS[eventName].callbacks.filter(callback => !callbackToRemove || callback === callbackToRemove).forEach(callback => {
			TARGET.removeEventListener(eventName, callback);
		});
		if (callbackToRemove) {
			EVENTS[eventName].callbacks = EVENTS[eventName].callbacks.filter(callback => callback !== callbackToRemove);
			if (EVENTS[eventName].callbacks.length === 0) {
				delete EVENTS[eventName];
			}
		} else {
			delete EVENTS[eventName];
		}

	},

	/**
	 * @param {String} eventName
	 * @param {Object} detail
	 */
	dispatch: function (eventName, detail) {
		_dispatchEvent(eventName, detail || null);
	}
}
