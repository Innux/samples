var check = function (str) {
    if (str === 'region') {
        for (var i = 0; i < regionBox.length; i++) {
            if (regionBox[i].checked === false) {
                regionAll.checked = false;
                return;
            }
            regionAll.checked = true;
        }
    }
    if (str === 'product') {
        for (var i = 0; i < productBox.length; i++) {
            if (productBox[i].checked === false) {
                productAll.checked = false;
                return;
            }
            productAll.checked = true;

        }
    }
}

var setCondition = function (box, bool) {
    for (var i = 0; i < box.length; i++) {
        box[i].checked = bool;
    }
}

//总选择
var checkAll = function (str) {
    if (str === 'region') {
        if (regionAll.checked) {
            setCondition(regionBox, true);
        } else {
            setCondition(regionBox, false);
        }
    } else if (str === 'product') {
        if (productAll.checked) {
            setCondition(productBox, true);
        } else {
            setCondition(productBox, false);
        }
    }
}
//获得选择框的数量
var countChecked = function (box) {
    var count = 0;
    for (var i = 0; i < box.length; i++) {
        if (box[i].checked) {
            count++;
        }
    }
    return count;
}
//获得地区、商品选择数对比结果
var getCompare = function () {
    var regionCount = countChecked(regionBox);
    var productCount = countChecked(productBox);

    if (regionCount === 1 && productCount === 1) {
        return 'r1p1';
    } else if (regionCount === 1 && productCount === 2) {
        return 'r1p2';
    }
    else if (regionCount === 2 && productCount === 1) {
        return 'r2p1';
    }
    else if (regionCount === 2 && productCount === 2) {
        return 'r2p2';
    }
}