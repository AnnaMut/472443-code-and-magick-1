
'use strict';

(function () {

var KeyCodes = {
  ESC: 27,
  ENTER: 13
};
var userDialog = document.querySelector('.setup');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var setupOpenByClick = function () {
  openPopup();
};
setupOpen.addEventListener('click', setupOpenByClick);

var setupCloseByClick = function () {
  closePopup();
};
setupClose.addEventListener('click', setupCloseByClick);

var setupOpenByEnter = function (evt) {
  if (evt.keyCode === KeyCodes.ENTER) {
    openPopup();
  }
};
setupOpen.addEventListener('keydown', setupOpenByEnter);

var setupClosebyEnter = function (evt) {
  if (evt.keyCode === KeyCodes.ENTER) {
    closePopup();
  }
};
setupClose.addEventListener('keydown', setupClosebyEnter);

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KeyCodes.ESC && evt.target.tagName !== 'INPUT') {
    closePopup();
  }
};

  })();


 var onPopupEscPress = function(evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener('click', function() {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
})();
