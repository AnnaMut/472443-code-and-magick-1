'use strict';


(function () {

var KeyCodes = {
  ESC: 27,
  ENTER: 13
};

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === KeyCodes.ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KeyCodes.ENTER) {
        action();
      }
    }
  };
})();

