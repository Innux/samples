window.onload = function () {
    console.log('load.......');
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

    tableWrapper.onmouseover = function (e) {
        var tBody = document.querySelector("tbody");
        var target = e.target;
        var parent = target.parentElement;
        if (target.nodeName === 'TD') {
            if (parent.children.length === 14) {
                parent.children[0].style.backgroundColor = 'white';
            }
            parent.style.backgroundColor = 'yellow';
            var sale = getSale(parent);
            buildChart2(sale);
        }
    }
    tableWrapper.onmouseout = function (e) {
        var tBody = document.querySelector("tbody");
        var target = e.target;
        if (target.nodeName === 'TD') {
            target.parentElement.style.backgroundColor = 'white';
        }
    }

//传入tr 返回sale数组
    var getSale = function (tr) {
        var children = tr.children;
        var len = children.length;
        var startIndex = 1;
        var sale = [];
        if (len === 14) {
            startIndex = 2;
        }
        for (var i = startIndex; i < len; i++) {
            sale.push(Number(children[i].innerHTML));
        }
        return sale;
    }
}