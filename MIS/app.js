regionDiv.onchange = function (e) {
    check('region');
    showTable();
}
productDiv.onchange = function (e) {
    check('product');
    showTable();
}
regionAll.onclick = function () {
    checkAll('region');
    showTable();
}
productAll.onclick = function () {
    checkAll('product');
    showTable();
}