'use strict';

(function () {
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var FONT_GAP = '16px PT Mono';
var TEXT_COLOR = '#000';
var VIVA_TEXT = 'Ура вы победили!';
var POIN_LIST_TEXT = 'Список результатов:';
var GAP_BAR = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var SELF_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var BLUE_BAR_1 = 'rgba(0, 0, 255, ';
var BLUE_BAR_2 = ')';
var NAMES_ARR_YOU = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = TEXT_COLOR;
  var maxTime = getMaxElement(times);
  ctx.fontSlyle = FONT_GAP;
  ctx.fillText(VIVA_TEXT, CLOUD_X + GAP, (CLOUD_Y + GAP) * 2);
  ctx.fillText(POIN_LIST_TEXT, CLOUD_X + GAP, (CLOUD_Y + GAP) * 3);

  for (var i = 0; i < names.length; i++) {
    ctx.fontSlyle = FONT_GAP;
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_Y + BAR_HEIGHT + GAP_BAR + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime));

    var colorBar = (names[i] === NAMES_ARR_YOU) ? SELF_BAR_COLOR : BLUE_BAR_1 + (Math.random() * 0.8 + 0.2) + BLUE_BAR_2;
    ctx.fillStyle = colorBar;
    ctx.fillRect(CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_Y + BAR_HEIGHT + GAP_BAR + GAP + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_HEIGHT - GAP);
  }
  return renderStatistics(ctx, names, times);
};

})();
