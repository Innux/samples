var createTh = function () {
    var tr = document.createElement('tr');
    tr.insertAdjacentHTML('beforeend', '<th>商品</th>');
    tr.insertAdjacentHTML('beforeend', '<th>地区</th>');
    for (var i = 1; i < 13; i++) {
        tr.insertAdjacentHTML('beforeend', '<th>' + i + '月</th>');
    }
    table.appendChild(tr);
}
//data1: product: "手机",
//       region: "华东",
//       sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]

var filterData = function(sourceData) {

}
var createTd = function (data) {
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        var rowCount = 1;
        if (productArray.includes(data[i].product)){
            rowCount++;
            console.log('++++++')
        }
        tr.insertAdjacentHTML('beforeend', '<th>' + data[i].product + '</th>');
        tr.insertAdjacentHTML('beforeend', '<th>' + data[i].region + '</th>');
        var sale = data[i].sale;
        for (var j = 0; j < sale.length; j++) {
            tr.insertAdjacentHTML('beforeend', '<th>' + sale[j] + '</th>');
            table.appendChild(tr);
        }
    }
}