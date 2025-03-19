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
	 * @param {Function} callback
	 */
	off: function (eventName, callback) {
		if (!EVENTS[eventName]) {
			return;
		}

		const callbacks = EVENTS[eventName].callbacks;

		if (callback) {
			for (let i = callbacks.length - 1; i >= 0; i--) {
				if (callbacks[i] === callback) {
					TARGET.removeEventListener(eventName, callbacks[i]);
					callbacks.splice(i, 1);
				}
			}

			if (callbacks.length === 0) {
				delete EVENTS[eventName];
			}
		} else {
			callbacks.forEach(callback => {
				TARGET.removeEventListener(eventName, callback);
			});

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
