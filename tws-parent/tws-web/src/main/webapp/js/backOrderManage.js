//数据
var getComResult = {
    "code": "1",
    "msg": "成功",
    "count": 4,//每页数量
    "allLength": 10,
    "orders": [
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "-1",
            id: 1
        },
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "-1",
            id: 2
        },
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '掏耳棉签包邮木棒婴儿棉棒黑色双头无菌掏耳朵尖头口红化妆用盒装',
            price: '60.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "0",
            id: 3
        },
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '襄遇二阳手工小麻花128gX4袋装休闲食品整箱酥脆怀旧特产零食小吃',
            price: '40.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "1",
            id: 4
        },
        {
            imgUrl: '../image/pic2.jpg',
            userName: '黄i性能',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "0",
            id: 5
        },
        {
            imgUrl: '../image/pic2.jpg',
            userName: '黄i性能',
            title: '【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "-1",
            id: 6
        },
        {
            imgUrl: '../image/pic2.jpg',
            userName: '黄i性能',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "0",
            id: 7
        },
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "0",
            id: 8
        },
        {
            imgUrl: '../image/pic1.jpg',
            userName: '黄i性能',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
            price: '79.00',
            style: '白灰',
            styleTwo: '你会',
            amount: '1',
            goodsStatus: "0",
            id: 9
        }

    ]
}
//点击选择订单管理和商品管理的下拉框
var select = document.getElementsByClassName("select")[0];
var selPage = document.getElementsByClassName("selPage")[0];
var selImg = selPage.getElementsByTagName("img")[0];
var selUl = select.getElementsByTagName("ul")[0];
selPage.onclick = function(){
    var imgSrc = selImg.src.split('/').pop();
    if(imgSrc == 'down.png'){
        selUl.className = "db";
        selImg.src="../img/backManage/up.png";
    }else{
        selUl.className = "dn";
        selImg.src="../img/backManage/down.png";
    }
}

//点击搜索按钮调用接口
var searchBtn = document.getElementsByClassName("search")[0].getElementsByTagName("button")[0];
var searchText = document.getElementsByClassName("search")[0].getElementsByTagName("input")[0];
searchBtn.onclick = function () {
    if (searchText.value == "" || searchText.value == " ") {
        alert("请输入你想搜索得订单名称！");
    } else {
        console.log("点击搜索的接口" + searchText.value);
        $.ajax({
            url: 'productAction_recommendProduct.action',//页面一进来的接口
            type: 'post',//方法
            cache: false,//是否缓存
            dataType: 'json',//返回值的类型
            data: {
                "index": searchText.value
            },
            success: function (getComResult) {
                if (getComResult.code == "1" || getComResult.code == 1) {
                    //函数调用
                    goPage(1, getComResult.count, getComResult.orders);
                } else {
                    alert(getComResult.msg);
                }
            },
            error: function () {
                if (getComResult.code == "1" || getComResult.code == 1) {
                    //函数调用
                    goPage(1, getComResult.count, getComResult.orders, getComResult.allLength);
                } else {
                    alert(getComResult.msg);
                }
            }
        });
    }
}

//获取拼接表格行 
var getTable = function (i, page, orders) {
    console.log("999___i：" + i + "page：" + page);
    var thHtml =
        "<tr>" +
        "<th style='width:150px;'>" +
        "<input type='checkbox' class='all' id='checkAll'/>" +
        "<span>全选&nbsp&nbsp&nbsp&nbsp</span>" +
        "<img src='../image/dele.png'/>" +
        "<span id='delete'>&nbsp删除</span>" +
        "</th>" +
        "<th style='width:100px;'>用户名</th>" +
        "<th style='width:280px;'>商品</th>" +
        "<th style='width:100px;'>价格</th>" +
        "<th style='width:110px;'>商品分类1</th>" +
        "<th style='width:110px;'>商品分类2</th>" +
        "<th style='width:75px;'>数量</th>" +
        "<th style='width:100px;'>操作状态</th>" +
        "</tr>";
    var tdHtml = "";
    var b = i + page;
    for (i; i < b; i++) {
        if (orders[i].goodsStatus == -1) {
            tdHtml +=
                "<tr>" +
                "<td>" +
                "<input type='checkbox' name='check'/>" +
                "<img src='" + orders[i].imgUrl + "' alt='" + orders[i].id + "'>" +
                "</td>" +
                "<td style='text-align:center;'>" +
                "<span>" + orders[i].userName + "</span>" +
                "</td>" +
                "<td>" +
                "<span class='title'>" + orders[i].title + "</span>" +
                "</td>" +
                "<td class='price'>" +
                "¥<span>" + orders[i].price + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].style + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].styleTwo + "</span>" +
                "</td>" +
                "<td class='amount'>" +
                "<span>" + orders[i].amount + "</span>" +
                "</td>" +
                "<td class='status'>" +
                "<button>" + '发货' + "</button>" +
                "</td>" +
                "</tr>"
                ;
        } else if (orders[i].goodsStatus == 0) {
            tdHtml +=
                "<tr>" +
                "<td>" +
                "<input type='checkbox' name='check'/>" +
                "<img src='" + orders[i].imgUrl + "' alt='" + orders[i].id + "'>" +
                "</td>" +
                "<td style='text-align:center;'>" +
                "<span>" + orders[i].userName + "</span>" +
                "</td>" +
                "<td>" +
                "<span class='title'>" + orders[i].title + "</span>" +
                "</td>" +
                "<td class='price'>" +
                "¥<span>" + orders[i].price + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].style + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].styleTwo + "</span>" +
                "</td>" +
                "<td class='amount'>" +
                "<span>" + orders[i].amount + "</span>" +
                "</td>" +
                "<td class='status'>" +
                "<span>" + '已确认收货' + "</span>" +
                "</td>" +
                "</tr>"
                ;
        } else {
            tdHtml +=
                "<tr>" +
                "<td>" +
                "<input type='checkbox' name='check'/>" +
                "<img src='" + orders[i].imgUrl + "' alt='" + orders[i].id + "'>" +
                "</td>" +
                "<td style='text-align:center;'>" +
                "<span>" + orders[i].userName + "</span>" +
                "</td>" +
                "<td>" +
                "<span class='title'>" + orders[i].title + "</span>" +
                "</td>" +
                "<td class='price'>" +
                "¥<span>" + orders[i].price + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].style + "</span>" +
                "</td>" +
                "<td class='style'>" +
                "<span>" + orders[i].styleTwo + "</span>" +
                "</td>" +
                "<td class='amount'>" +
                "<span>" + orders[i].amount + "</span>" +
                "</td>" +
                "<td class='status'>" +
                "<span>" + '已发货' + "</span>" +
                "</td>" +
                "</tr>"
                ;
        }



    }
    var tableHtml = thHtml + tdHtml
    return tableHtml;
}


//js分页
//el:分页容器 count:总记录数 pageStep:每页显示多少个 pageNum:第几页 fnGo:分页跳转函数
var jsPage = function (el, count, pageStep, pageNum, fnGo) {
    this.getLink = function (fnGo, index, pageNum, text, orders) {
        var s = '<a href="#p' + index + '" onclick="' + fnGo + '(' + index + ');" ';
        if (index == pageNum) {
            s += 'class="aCur" ';
        }
        text = text || index;
        s += '>' + text + '</a> ';
        return s;
    }

    //总页数
    var pageNumAll = Math.ceil(count / pageStep);
    if (pageNumAll == 1) {
        divPage.innerHTML = '';
        return;
    }
    var itemNum = 5; //当前页左右两边显示个数
    pageNum = Math.max(pageNum, 1);
    pageNum = Math.min(pageNum, pageNumAll);
    var s = '';
    if (pageNum > 1) {
        s += this.getLink(fnGo, pageNum - 1, pageNum, '上一页');
    } else {
        s += '<span>上一页</span> ';
    }
    var begin = 1;
    if (pageNum - itemNum > 1) {
        s += this.getLink(fnGo, 1, pageNum) + '... ';
        begin = pageNum - itemNum;
    }
    var end = Math.min(pageNumAll, begin + itemNum * 2);
    if (end == pageNumAll - 1) {
        end = pageNumAll;
    }
    for (var i = begin; i <= end; i++) {
        s += this.getLink(fnGo, i, pageNum);
    }
    if (end < pageNumAll) {
        s += '... ' + this.getLink(fnGo, pageNumAll, pageNum);
    }
    if (pageNum < pageNumAll) {
        s += this.getLink(fnGo, pageNum + 1, pageNum, '下一页');
    } else {
        s += '<span>下一页</span> ';
    }
    var divPage = document.getElementById(el);
    divPage.innerHTML = s;
}


//展示订单内容
function goPage(pageIndex, pageStep, orders, allLength) {
    document.querySelector('table').innerHTML = getTable((pageIndex - 1) * pageStep, pageStep, orders) //传参数为第n页的第一件商品的
    jsPage('divPage', allLength, pageStep, pageIndex, 'getOrders');
    //删除数组
    var delArray = [];
    //删除行
    document.getElementById("delete").onclick = function () {
        var tab = document.querySelector('table');
        var arrIndex = 0;
        delArray.splice(0);
        for (var i = tab.rows.length - 1; i > 0; i--) {
            if (tab.rows[i].cells[0].getElementsByTagName('input')[0].checked) {
                delArray[arrIndex++] = tab.rows[i].cells[0].getElementsByTagName('img')[0].alt;
            }
        }
        console.log("删除接口" + delArray);
        $.ajax({
            url: 'productAction_recommendProduct.action',//页面一进来的接口
            type: 'post',//方法
            cache: false,//是否缓存
            dataType: 'json',//返回值的类型
            data: {
                "index": delArray
            },
            success: function (getComResult) {
                if (getComResult.code == "1" || getComResult.code == 1) {
                    //函数调用
                    console.log("删除调用接口成功！");
                    console.log("页数" + pageIndex);
                    goPage(pageIndex, getComResult.count, getComResult.orders, getComResult.allLength);
                } else {
                    alert(getComResult.msg);
                }
            },
            error: function () {
                if (getComResult.code == "1" || getComResult.code == 1) {
                    //函数调用
                    console.log("删除调用接口成功！");
                    console.log("页数" + pageIndex);
                    goPage(pageIndex, getComResult.count, getComResult.orders, getComResult.allLength);
                } else {
                    alert(getComResult.msg);
                }
            }
        });
    }


    var tab = document.getElementsByTagName('table')[0];
    var tabBtn = tab.getElementsByTagName('button');
    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].index = i;
        tabBtn[i].onclick = function () {
            if (tabBtn[this.index].innerText == "发货") {
                var orderNumber = tabBtn[this.index].parentNode.parentNode.childNodes[0].getElementsByTagName('img')[0].alt;
                var btnIndex = this.index;
                console.log("点击发货调用接口" + orderNumber);
                $.ajax({
                    url: 'productAction_recommendProduct.action',//页面一进来的接口
                    type: 'post',//方法
                    cache: false,//是否缓存
                    dataType: 'json',//返回值的类型
                    data: {
                        "index": orderNumber
                    },
                    success: function (getComResult) {
                        if (getComResult.code == "1" || getComResult.code == 1) {
                            tabBtn[btnIndex].className = "alreadyBtn";
                            tabBtn[btnIndex].innerText = "已发货";
                        } else {
                            alert(getComResult.msg);
                        }
                    },
                    error: function () {
                        if (getComResult.code == "1" || getComResult.code == 1) {
                            //函数调用
                            tabBtn[btnIndex].className = "alreadyBtn";
                            tabBtn[btnIndex].innerText = "已发货";
                        } else {
                            alert(getComResult.msg);
                        }
                    }
                });
            }

        }
    }

    //全选
    document.getElementById("checkAll").onclick = function () {
        var checked = document.getElementById("checkAll").checked;
        var checkson = document.getElementsByName("check");
        if (checked) {
            for (var i = 0; i < checkson.length; i++) {
                checkson[i].checked = true;
            }
        } else {
            for (var i = 0; i < checkson.length; i++) {
                checkson[i].checked = false;
            }
        }
    }

}


function getOrders(pageIndex) {
    console.log("获得每页订单得接口" + pageIndex);
    $.ajax({
        url: 'productAction_recommendProduct.action',//页面一进来的接口
        type: 'post',//方法
        cache: false,//是否缓存
        dataType: 'json',//返回值的类型
        data: {
            "index": pageIndex
        },
        success: function (getComResult) {
            if (getComResult.code == "1" || getComResult.code == 1) {
                //函数调用
                goPage(pageIndex, getComResult.count, getComResult.orders);
            } else {
                alert(getComResult.msg);
            }
        },
        error: function () {
            if (getComResult.code == "1" || getComResult.code == 1) {
                //函数调用
                goPage(pageIndex, getComResult.count, getComResult.orders, getComResult.allLength);
            } else {
                alert(getComResult.msg);
            }
        }
    });
}
getOrders(1);




