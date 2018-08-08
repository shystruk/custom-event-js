_CustomEventPolyfill();

var TARGET = document;
var EVENTS = {};

/**
 * @param {String} eventName 
 * @param {Object} detail
 */
function _dispatchEvent(eventName, detail) {
  var event = new CustomEvent(eventName, {
    detail: detail
  });

  TARGET.dispatchEvent(event);
}

function _CustomEventPolyfill() {
  if (typeof window.CustomEvent === 'function') {
    return;
  }
  
  function CustomEvent(event, params) {
    var evt = document.createEvent('CustomEvent');

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
  ON: function(eventName, callback) {
    EVENTS[eventName] = callback;
    TARGET.addEventListener(eventName, callback);
  },

  /**
   * @param {String} eventName 
   */
  OFF: function(eventName) {
    TARGET.removeEventListener(eventName, EVENTS[eventName]);
    delete EVENTS[eventName];
  },

  /**
   * @param {String} eventName 
   * @param {Object} detail
   */
  DISPATCH: function(eventName, detail) {
    _dispatchEvent(eventName, detail || null);
  }
}
