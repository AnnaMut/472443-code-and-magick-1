'use strict';

(function () {
  var COLORS = ['red', 'green', 'blue'];

  var getRandomColor = function () {
    return COLORS[Math.floor(COLORS.length * Math.random())];
  };

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      var color = getRandomColor();
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    })
  }
})();
