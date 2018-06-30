var itemTemplet = function (rx, ry, rw, rh, tx, ty, txt) {
    var s = ` <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="blue"/>
                  <text x="${tx}" y="${ty}">${txt}</text>`;
    return s;
}

//传入选中的销售记录 即sale数组
var buildChart = function (data) {
    var svg = document.querySelector('#svg-main');
    svg.innerHTML = '';
    var s = ` <line x1="50" y1="50" x2="50" y2="350" stroke="black" fill="transparent" stroke-width="1"/>
                  <line x1="50" y1="350" x2="550" y2="350" stroke="black" fill="transparent" stroke-width="1"/>`;
    var count = 0;//第几根柱子
    var rw = 20, rh = 0, rx = 0, ry = 0;
    var tx = 0, ty = 370;
    var txt = '';

    var MAX = 0;//获得数组中最大的值
    for (var i = 0; i < data.length; i++) {
        MAX = data[i] > MAX ? data[i] : MAX;
    }

    for (var i = 0; i < data.length; i++) {
        count = 2 * (i + 1) - 1;
        rh = (data[i] / MAX).toFixed(2) * 300;
        rx = count * rw + 50;
        ry = 350 - rh;
        tx = rx;
        txt = (i + 1) + '月';
        s += itemTemplet(rx, ry, rw, rh, tx, ty, txt);
    }
    svg.insertAdjacentHTML('beforeend', s);
}


//==============================================================================
//带数字
var itemTemplet2 = function (rx, ry, rw, rh, tx, ty, txt, numx, numy, num) {
    var s = `<text x="${numx}" y="${numy}" font-size="12px">${num}</text>
                 <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="blue"/>
                 <text x="${tx}" y="${ty}">${txt}</text>`;
    return s;
}
var buildChart2 = function (data) {
    var svg = document.querySelector('#svg-main');
    svg.innerHTML = '';
    var s = ` <line x1="50" y1="50" x2="50" y2="350" stroke="black" fill="transparent" stroke-width="1"/>
                  <line x1="50" y1="350" x2="550" y2="350" stroke="black" fill="transparent" stroke-width="1"/>`;
    var count = 0;//第几条柱子
    var numx = 0, numy = 0, num = 0;
    var rw = 20, rh = 0, rx = 0, ry = 0;
    var tx = 0, ty = 370;
    var txt = '';

    var MAX = 0;//获得数组中最大的值
    for (var i = 0; i < data.length; i++) {
        MAX = data[i] > MAX ? data[i] : MAX;
    }

    for (var i = 0; i < data.length; i++) {
        count = 2 * (i + 1) - 1;
        rh = (data[i] / MAX).toFixed(2) * 300;
        rx = count * rw + 50;
        ry = 350 - rh;
        tx = rx;
        txt = (i + 1) + '月';
        numx = rx;
        numy = ry - 10;
        num = data[i];
        s += itemTemplet2(rx, ry, rw, rh, tx, ty, txt, numx, numy, num);
    }
    svg.insertAdjacentHTML('beforeend', s);
}


