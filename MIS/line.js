var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var drawLineChart = function (sales) {

}

var drawCo = function () {
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350);
    ctx.lineTo(550, 350);
    ctx.stroke();
}


var drawLine = function (sale) {
    var w = 40;
    var x1 = 0, y1 = 0, x2 = 0, y2 = 0;

    drawArc(w + 50, 350 - sale[0]);
    for (var i = 0; i < sale.length - 1; i++) {
        x1 = w * (i + 1) + 50;
        y1 = 350 - sale[i];
        x2 = x1 + w;
        y2 = 350 - sale[i + 1];
        drawOneLine(x1, y1, x2, y2);
        drawArc(x2, y2);
    }

}

//绘制圆点
function drawArc(x1, y1) {
    ctx.beginPath();
    ctx.arc(x1, y1, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

// 画线的方法
function drawOneLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}