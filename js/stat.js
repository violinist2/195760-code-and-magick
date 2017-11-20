'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  ctx.fillStyle = '#000';

  var max = -1;
  //var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
     // maxIndex = i;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);
  var barHeigth = 40;
  var indent = 90;
  var initialX = 140;
  var initialY = 250;
  var initialTextY = 270;
  var initialPointsY = 90;

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + indent * i, initialY, barHeigth, times[i] * -step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialTextY);
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialPointsY);

    if (names[i].indexOf('Вы')) {
      ctx.fillStyle = 'white';
      ctx.fillStyle = 'rgba(0, 0, 255,' + i / 4 + 1 + ')';
      ctx.fillRect(initialX + indent * i, initialY, barHeigth, times[i] * -step);
    }
   }

};

