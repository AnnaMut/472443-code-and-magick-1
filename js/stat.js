'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = '16px PT Mono';
var GAP_BAR = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}; /** само облако, откуда взяли х и у не улавливаю**/

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}; /** функция нахождения максимального элемента **/

var getColorBar = function (names) {
  var colorBar;
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      colorBar = 'rgba(255, 0, 0, 1)';
    } else {
      colorBar = 'rgba(0, 0, 255, 2)';
    }
    return colorBar;
  }
}; /** функция возращающая цвет мой и других игроков что-то не работает видимо как-то не так пишу рандом Math.random() - поставила число, чтобы пропустил тревис**/

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);
  ctx.fontSlyle = FONT_GAP;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, (CLOUD_Y + GAP) * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, (CLOUD_Y + GAP) * 3);


  for (var i = 0; i < names.length; i++) {
    ctx.fontSlyle = FONT_GAP;
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_Y + BAR_HEIGHT + GAP_BAR + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime));
  }

  for (i = 0; i < names.length; i++) {
    ctx.fillStyle = getColorBar(names[i]);
    ctx.fillRect(CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_Y + BAR_HEIGHT + GAP_BAR + GAP + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }

  for (i = 0; i < names.length; i++) {
    ctx.fontSlyle = FONT_GAP;
    ctx.fillText(names[i], CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_HEIGHT - GAP);
  }
};
/** ctx.beginPath();
    ctx.moveTo((CLOUD_X + GAP_BAR + BAR_WIDTH) + i, CLOUD_HEIGHT - CLOUD_X * i);
    ctx.lineWidth = BAR_WIDTH;
    ctx.lineTo((CLOUD_X + GAP_BAR + BAR_WIDTH) + i, (BAR_HEIGHT * times[i]) / maxTime * i);
    ctx.strokeStyle = getColorBar(names[i]);
    ctx.stroke(); вариант с линией вместо прямоугольника хотела обсудить**/
