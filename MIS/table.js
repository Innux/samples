var obj2Array = function (obj) {
    var array = [];
    var compareResult = getCompare();

    if (compareResult === 'r1p2') {
        array.push(obj.region);
        array.push(obj.product);
    } else {
        array.push(obj.product);
        array.push(obj.region);
    }

    for (var i = 0; i < obj.sale.length; i++) {
        array.push(obj.sale[i]);
    }

    return array;
}

//返回选中数据
var getCheckedData = function () {
    var result = [];
    for (var i = 0; i < regionBox.length; i++) {
        if (regionBox[i].checked) {
            for (var j = 0; j < productBox.length; j++) {
                if (productBox[j].checked) {
                    for (var k = 0; k < sourceData.length; k++) {
                        if (regionBox[i].value === sourceData[k].region && productBox[j].value === sourceData[k].product) {
                            var tmpArray = obj2Array(sourceData[k]);
                            result.push(tmpArray);
                        }
                    }
                }
            }
        }
    }

    //对数据进行排序
    // result.sort(function (a, b) {
    //     return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    // })
    result.sort();
    return result;
}

//生成表头
var buildTh = function () {
    var s = '';
    if (getCompare() === 'r1p2') {
        s = '<tr><th>地区</th><th>商品</th>';
    } else {
        s = '<tr><th>商品</th><th>地区</th>';
    }

    for (var i = 1; i < 13; i++) {
        s += '<th>' + i + '月</th>';
    }
    s += '</tr>';
    return s;
}

//渲染表格内容
var buildTable = function (data) {
    var tb = document.createElement('table');
    var th = buildTh();
    tb.border = 1;
    tb.cellSpacing = 0;
    tb.cellPadding = 10;
    // tb.insertAdjacentHTML('beforeend', th);
    var s = th;

    for (var i = 0; i < data.length; i++) {
        s += '<tr>';
        for (var j = 0; j < data[i].length; j++) {
            s += '<td>' + data[i][j] + '</td>';
        }
        s += '</tr>';
    }
    tb.insertAdjacentHTML('beforeend', s);
    return tb;
}
var formatTable = function (table) {
    var rows = table.rows;
    var i = rows.length - 1;
    while (i > 0) {
        var n = 1;
        while (rows[i].cells[0].textContent === rows[i - 1].cells[0].textContent && i > 0) {
            rows[i].deleteCell(0);
            n++;
            i--;
        }
        rows[i].cells[0].rowSpan = n;
        i--;
    }
    return table;
}

var showTable = function () {
    tableWrapper.innerHTML = '';
    var data = getCheckedData();
    if (data.length !== 0) {
        var table = buildTable(data);
        table = formatTable(table);
        console.log('build table ' + table);
        tableWrapper.appendChild(table);
    }
}