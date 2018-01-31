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
}; /** само облако**/

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}; /** функция нахождения максимального элемента **/

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

    var colorBar = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')'; /** не получается добавить сюда умножить на 0.8 и прибавить 0.2 **/
    ctx.fillStyle = colorBar;
    ctx.fillRect(CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_Y + BAR_HEIGHT + GAP_BAR + GAP + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP_BAR + ((BAR_WIDTH + GAP_BAR) * i), CLOUD_HEIGHT - GAP);
  }
};

