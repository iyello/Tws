//数据
var getComResult = {
    "code": "1",
    "msg": "成功",
    "count": 4,//每页数量
    "allLength": 10,
    "orders": [
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "0",
            id: 1,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "0",
            id: 2,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "0",
            id: 3,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "1",
            id: 4,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "1",
            id: 5,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色，白色，黑色，米色09-09',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "1",
            id: 6,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "2",
            id: 7,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "2",
            id: 8,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        },
        {
            imgUrl: '../image/pic1.jpg',
            title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
            goodsStatus: "2",
            id: 9,
            price: '79.00',
            disPrice: '69.00',
            isCount: 1,
            address: '广东广州',
            styleOne: '尺寸,36码,37码,38码',
            styleTwo: '颜色,白色,黑色,米色',
        }

    ]
}
var getModComResult = {
    "code": "1",
    "msg": "成功",
    "order":
    {
        imgUrl1: '../image/pic1.jpg',
        imgUrl2: '../image/pic2.jpg',
        imgUrl3: '../image/pic3.jpg',
        imgUrl4: '../image/pic1.jpg',
        imgUrl5: '../image/pic1.jpg',
        title: '面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女fadsfdsajk手段狠辣尽快',
        goodsStatus: "0",
        id: 1,
        price: '79.00',
        disPrice: '69.00',
        isCount: 1,
        address: '广东广州',
        styleOne: '尺寸,36码,37码,38码',
        styleTwo: '颜色,白色,黑色,米色',
    }
}
//点击选择订单管理和商品管理的下拉框
var select = document.getElementsByClassName("select")[0];
var selPage = document.getElementsByClassName("selPage")[0];
var selImg = selPage.getElementsByTagName("img")[0];
var selUl = select.getElementsByTagName("ul")[0];
selPage.onclick = function () {
    var imgSrc = selImg.src.split('/').pop();
    if (imgSrc == 'down.png') {
        selUl.className = "db";
        selImg.src = "../img/backManage/up.png";
    } else {
        selUl.className = "dn";
        selImg.src = "../img/backManage/down.png";
    }
}

//点击选择订单管理和商品管理的下拉框
var select2 = document.getElementsByClassName("select2")[0];
var selPage2 = document.getElementsByClassName("selPage2")[0];
var selPageB = selPage2.getElementsByTagName("b")[0];
var selImg2 = select2.getElementsByTagName("img")[0];
var selUl2 = selPage2.getElementsByTagName("ul")[0];
var selLi = selUl2.getElementsByTagName("li");
select2.onclick = function () {
    var imgSrc = selImg2.src.split('/').pop();
    if (imgSrc == 'down.png') {
        selUl2.className = "db";
        selImg2.src = "../img/backManage/up.png";
    } else {
        selUl2.className = "dn";
        selImg2.src = "../img/backManage/down.png";
    }
}
// console.log(selLi.length)
for (var i = 0; i < selLi.length; i++) {
    selLi[i].onclick = function () {
        selPageB.innerHTML = this.innerText;
        selUl2.className = "dn";
        selImg2.src = "../img/backManage/down.png";
        console.log(this.innerText)
    }
}

//点击搜索按钮调用接口
var searchBtn = document.getElementsByClassName("search")[0].getElementsByTagName("button")[0];
var searchText = document.getElementsByClassName("search")[0].getElementsByTagName("input")[0];
searchBtn.onclick = function () {
    if (searchText.value == "" || searchText.value == " ") {
        alert("请输入你想搜索的商品名称！");
    } else {
        console.log("点击搜索的接口" + searchText.value);
        $.ajax({
            url: 'productAction_recommendProduct.action',//页面一进来的接口
            type: 'post',//方法
            cache: false,//是否缓存
            dataType: 'json',//返回值的类型
            data: {
                "index": searchText.value,
                "page": 1
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
    // console.log("999___i：" + i + "page：" + page);
    var thHtml =
        "<tr>" +
        "<th style='width:150px;font-weight:normal;'>" +
        "<input type='checkbox' class='all' id='checkAll'/>" +
        "<span>全选&nbsp&nbsp&nbsp&nbsp</span>" +
        "<img src='../image/dele.png'/>" +
        "<span id='delete'>&nbsp删除</span>" +
        "</th>" +
        "<th style='width:90px;font-weight:normal;'>商品类别</th>" +
        "<th style='width:270px;font-weight:normal;'>商品名</th>" +
        "<th style='width:75px;font-weight:normal;'>原价</th>" +
        "<th style='width:75px;font-weight:normal;'>打折价</th>" +
        "<th style='width:75px;font-weight:normal;'>是否打折</th>" +
        "<th style='width:100px;font-weight:normal;'>发货地址</th>" +
        "<th style='width:115px;font-weight:normal;'>商品分类1</th>" +
        "<th style='width:115px;font-weight:normal;'>商品分类2</th>" +
        "<th style='width:100px;font-weight:normal;'>操作状态</th>" +
        "</tr>";
    var tdHtml = "";
    var b = i + page;
    for (i; i < b; i++) {
        var comName = '';
        if (orders[i].goodsStatus == 0) {
            comName = '生活家电';
        } else if (orders[i].goodsStatus == 1) {
            comName = '衣物服饰';
        } else {
            comName = '食品生鲜';
        }
        tdHtml +=
            "<tr>" +
            "<td>" +
            "<input type='checkbox' name='check'/>" +
            "<img src='" + orders[i].imgUrl + "' alt='" + orders[i].goodsStatus + '/' + orders[i].id + "'>" +
            "</td>" +
            "<td style='text-align:center;'>" +
            "<span>" + comName + "</span>" +
            "</td>" +
            "<td>" +
            "<span class='title'>" + orders[i].title + "</span>" +
            "</td>" +
            "<td class='price'>" +
            "¥<span>" + orders[i].price + "</span>" +
            "</td>" +
            "</td>" +
            "<td class='price'>" +
            "¥<span>" + orders[i].disPrice + "</span>" +
            "</td>" +
            "<td class='price'>" +
            "<span>" + orders[i].isCount + "</span>" +
            "</td>" +
            "</td>" +
            "<td class='amount'>" +
            "<span>" + orders[i].address + "</span>" +
            "</td>" +
            "<td class='style'>" +
            "<span>" + orders[i].styleOne + "</span>" +
            "</td>" +
            "<td class='style'>" +
            "<span>" + orders[i].styleTwo + "</span>" +
            "<td class='status'>" +
            "<button>" + '编辑' + "</button>" +
            "</td>" +
            "</tr>"
            ;

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
                delArray[arrIndex++] = tab.rows[i].cells[0].getElementsByTagName('img')[0].alt.split("/")[1];
            }
        }
        console.log("删除接口" + delArray);
        if (delArray.length != 0) {
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
    }


    var tab = document.getElementsByTagName('table')[0];
    var tabBtn = tab.getElementsByTagName('button');
    var shade = document.getElementById("shade");
    console.log("tr数目" + tabBtn.length);
    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].index = i;
        //点击编辑
        tabBtn[i].onclick = function () {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            shade.className = "db";
            var tr = tab.getElementsByTagName("tr")[this.index + 1];
            //获取商品的类别和编号
            var status = tr.getElementsByTagName("td")[0].getElementsByTagName("img")[0].alt.split('/')[0];
            var id = tr.getElementsByTagName("td")[0].getElementsByTagName("img")[0].alt.split('/')[1];
            var coverLis = document.getElementById("cover").getElementsByTagName("li");
            var classify = coverLis[0].getElementsByTagName("b")[0];
            var title = coverLis[4].getElementsByTagName("input")[0];
            var oPrice = coverLis[5].getElementsByTagName("input")[0];
            var nPrice = coverLis[6].getElementsByTagName("input")[0];
            var isPrice = coverLis[7].getElementsByTagName("input")[0];
            var address = coverLis[8].getElementsByTagName("input")[0];
            var styleOne = coverLis[9].getElementsByTagName("input")[0];
            var styleTwo = coverLis[10].getElementsByTagName("input")[0];
            var img1 = coverLis[11].getElementsByTagName("img");
            var img2 = coverLis[12].getElementsByTagName("img");

            console.log("类别" + status);
            console.log("编号" + id);
            $.ajax({
                url: 'productAction_recommendProduct.action',
                type: 'post',//方法
                cache: false,//是否缓存
                dataType: 'json',//返回值的类型
                data: {
                    "status": status,
                    "id": id
                },
                success: function (getModComResult) {
                    if (getModComResult.code == "1" || getModComResult.code == 1) {
                        reset();
                        if (getModComResult.order.goodsStatus == 0)
                            classify.innerText = '生活家电';
                        else if (getModComResult.order.goodsStatus == 1)
                            classify.innerText = '衣物服饰';
                        else
                            classify.innerText = '食品生鲜';
                        title.value = getModComResult.order.title;
                        oPrice.value = getModComResult.order.price;
                        nPrice.value = getModComResult.order.disPrice;
                        isPrice.value = getModComResult.order.isCount;
                        address.value = getModComResult.order.address;
                        styleOne.value = getModComResult.order.styleOne;
                        styleTwo.value = getModComResult.order.styleTwo;
                        img1[0].src = getModComResult.order.imgUrl1;
                        img1[1].src = getModComResult.order.imgUrl2;
                        img1[2].src = getModComResult.order.imgUrl3;
                        img2[0].src = getModComResult.order.imgUrl4;
                        img2[1].src = getModComResult.order.imgUrl5;
                    } else {
                        alert(getModComResult.msg);
                    }
                },
                error: function () {
                    if (getModComResult.code == "1" || getModComResult.code == 1) {
                        reset();
                        if (getModComResult.order.goodsStatus == 0)
                            classify.innerText = '生活家电';
                        else if (getModComResult.order.goodsStatus == 1)
                            classify.innerText = '衣物服饰';
                        else
                            classify.innerText = '食品生鲜';
                        title.value = getModComResult.order.title;
                        oPrice.value = getModComResult.order.price;
                        nPrice.value = getModComResult.order.disPrice;
                        isPrice.value = getModComResult.order.isCount;
                        address.value = getModComResult.order.address;
                        styleOne.value = getModComResult.order.styleOne;
                        styleTwo.value = getModComResult.order.styleTwo;
                        img1[0].src = getModComResult.order.imgUrl1;
                        img1[1].src = getModComResult.order.imgUrl2;
                        img1[2].src = getModComResult.order.imgUrl3;
                        img2[0].src = getModComResult.order.imgUrl4;
                        img2[1].src = getModComResult.order.imgUrl5;
                    } else {
                        alert(getModComResult.msg);
                    }
                }
            });
            //在编辑中点击保存
            var save = document.getElementById("save");
            save.onclick = function () {
                console.log("保存分类：" + status);
                console.log("保存编号：" + id);
                console.log("分类：" + classify.innerText);
                console.log("标题：" + title.value);
                console.log("原价：" + oPrice.value);
                console.log("现价：" + nPrice.value);
                console.log("打折标识：" + isPrice.value);
                console.log("地址：" + address.value);
                console.log("分类1：" + styleOne.value);
                console.log("分类2：" + styleTwo.value);
                $.ajax({
                    url: 'productAction_recommendProduct.action',//页面一进来的接口
                    type: 'post',//方法
                    cache: false,//是否缓存
                    dataType: 'json',//返回值的类型
                    data: {
                        "status": status,
                        "id": id,
                        "classify": classify.innerText,
                        "title": title.value,
                        "oPrice": oPrice.value,
                        "nPrice": nPrice.value,
                        "isPrice": isPrice.value,
                        "address": address.value,
                        "styleOne": styleOne.value,
                        "styleTwo": styleTwo.value
                    },
                    success: function (getModComResult) {
                        if (getModComResult.code == "1" || getModComResult.code == 1) {
                            shade.className = "dn";
                            document.getElementsByTagName("body")[0].style.overflow = "auto";
                        } else {
                            alert(getModComResult.msg);
                        }
                    },
                    error: function () {
                        if (getModComResult.code == "1" || getModComResult.code == 1) {
                            shade.className = "dn";
                            document.getElementsByTagName("body")[0].style.overflow = "auto";
                        } else {
                            alert(getModComResult.msg);
                        }
                    }
                });
            }
        }
    }

    //在编辑/新增中点击取消
    var cancel = document.getElementById("cancel");
    cancel.onclick = function () {
        shade.className = "dn";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
    var cancelP = document.getElementById("cover").getElementsByTagName("p")[0];
    cancelP.onclick = function () {
        shade.className = "dn";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
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

//新增页面
var addCom = document.getElementById("addCom");
addCom.onclick = function () {
    shade.className = "db";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    reset();
    //var save = document.getElementById("save");

    // 点击新增按钮
    // save.onclick = function () {
    // var coverLis = document.getElementById("cover").getElementsByTagName("li");
    // var classify = coverLis[0].getElementsByTagName("b")[0];
    // var title = coverLis[4].getElementsByTagName("input")[0];
    // var oPrice = coverLis[5].getElementsByTagName("input")[0];
    // var nPrice = coverLis[6].getElementsByTagName("input")[0];
    // var isPrice = coverLis[7].getElementsByTagName("input")[0];
    // var address = coverLis[8].getElementsByTagName("input")[0];
    // var styleOne = coverLis[9].getElementsByTagName("input")[0];
    // var styleTwo = coverLis[10].getElementsByTagName("input")[0];
    // var img1 = coverLis[11].getElementsByTagName("img");
    // var img2 = coverLis[12].getElementsByTagName("img");
    // if (title.value == "") {
    //     alert("请输入你需要新增的商品名");
    // } else if (oPrice.value == "") {
    //     alert("请输入商品原价");
    // } else if (nPrice.value == "") {
    //     alert("请输入打折价");
    // } else if (isPrice.value == "") {
    //     alert("请输入当前商品是否打折标识（0为不打折，1为打折）");
    // } else if (address.value == "") {
    //     alert("请输入商品发货地");
    // } else if (styleOne.value == "") {
    //     alert("请输入商品分类1");
    // } else if (styleTwo.value == "") {
    //     alert("请输入商品分类2");
    // } else if (img1[0].src = "../img/backManage/upload.png") {
    //     alert("请上传你的商品图片1");
    // } else if (img1[1].src = "../img/backManage/upload.png") {
    //     alert("请上传你的商品图片2");
    // } else if (img1[2].src = "../img/backManage/upload.png") {
    //     alert("请上传你的商品图片3");
    // } else if (img2[0].src = "../img/backManage/upload.png") {
    //     alert("请上传你的商品图片4");
    // } else if (img2[1].src = "../img/backManage/upload.png") {
    //     alert("请上传你的商品图片5");
    // } else {
    //     //调用接口
    //     console.log("保存分类：" + status);
    //     console.log("保存编号：" + id);
    //     console.log("分类：" + classify.innerText);
    //     console.log("标题：" + title.value);
    //     console.log("原价：" + oPrice.value);
    //     console.log("现价：" + nPrice.value);
    //     console.log("打折标识：" + isPrice.value);
    //     console.log("地址：" + address.value);
    //     console.log("分类1：" + styleOne.value);
    //     console.log("分类2：" + styleTwo.value);
    //     $.ajax({
    //         url: 'productAction_recommendProduct.action',//页面一进来的接口
    //         type: 'post',//方法
    //         cache: false,//是否缓存
    //         dataType: 'json',//返回值的类型
    //         data: {
    //             "status": status,
    //             "id": id,
    //             "classify": classify.innerText,
    //             "title": title.value,
    //             "oPrice": oPrice.value,
    //             "nPrice": nPrice.value,
    //             "isPrice": isPrice.value,
    //             "address": address.value,
    //             "styleOne": styleOne.value,
    //             "styleTwo": styleTwo.value
    //         },
    //         success: function (getModComResult) {
    //             if (getModComResult.code == "1" || getModComResult.code == 1) {
    //                 shade.className = "dn";
    //                 document.getElementsByTagName("body")[0].style.overflow = "auto";
    //             } else {
    //                 alert(getModComResult.msg);
    //             }
    //         },
    //         error: function () {
    //             if (getModComResult.code == "1" || getModComResult.code == 1) {
    //                 shade.className = "dn";
    //                 document.getElementsByTagName("body")[0].style.overflow = "auto";
    //             } else {
    //                 alert(getModComResult.msg);
    //             }
    //         }
    //     });
    // }
    // }
}

$("#form1").ajaxForm(function (data) {
    console.log(data);
    console.log("str:" + JSON.stringify(data));
    addComInfo(src1, src2, src3, src4, src5);
});

function addComInfo(src1, src2, src3, src4, src5) {
    var coverLis = document.getElementById("cover").getElementsByTagName("li");
    var classify = coverLis[0].getElementsByTagName("b")[0];
    var title = coverLis[4].getElementsByTagName("input")[0];
    var oPrice = coverLis[5].getElementsByTagName("input")[0];
    var nPrice = coverLis[6].getElementsByTagName("input")[0];
    var isPrice = coverLis[7].getElementsByTagName("input")[0];
    var address = coverLis[8].getElementsByTagName("input")[0];
    var styleOne = coverLis[9].getElementsByTagName("input")[0];
    var styleTwo = coverLis[10].getElementsByTagName("input")[0];
    var img1 = coverLis[11].getElementsByTagName("img");
    var img2 = coverLis[12].getElementsByTagName("img");
    if (title.value == "") {
        alert("请输入你需要新增的商品名");
    } else if (oPrice.value == "") {
        alert("请输入商品原价");
    } else if (nPrice.value == "") {
        alert("请输入打折价");
    } else if (isPrice.value == "") {
        alert("请输入当前商品是否打折标识（0为不打折，1为打折）");
    } else if (address.value == "") {
        alert("请输入商品发货地");
    } else if (styleOne.value == "") {
        alert("请输入商品分类1");
    } else if (styleTwo.value == "") {
        alert("请输入商品分类2");
    } else if (img1[0].src = "../img/backManage/upload.png") {
        alert("请上传你的商品图片1");
    } else if (img1[1].src = "../img/backManage/upload.png") {
        alert("请上传你的商品图片2");
    } else if (img1[2].src = "../img/backManage/upload.png") {
        alert("请上传你的商品图片3");
    } else if (img2[0].src = "../img/backManage/upload.png") {
        alert("请上传你的商品图片4");
    } else if (img2[1].src = "../img/backManage/upload.png") {
        alert("请上传你的商品图片5");
    } else {
        //调用接口
        console.log("保存分类：" + status);
        console.log("保存编号：" + id);
        console.log("分类：" + classify.innerText);
        console.log("标题：" + title.value);
        console.log("原价：" + oPrice.value);
        console.log("现价：" + nPrice.value);
        console.log("打折标识：" + isPrice.value);
        console.log("地址：" + address.value);
        console.log("分类1：" + styleOne.value);
        console.log("分类2：" + styleTwo.value);
        $.ajax({
            url: 'productAction_recommendProduct.action',//页面一进来的接口
            type: 'post',//方法
            cache: false,//是否缓存
            dataType: 'json',//返回值的类型
            data: {
                "status": status,
                "id": id,
                "classify": classify.innerText,
                "title": title.value,
                "oPrice": oPrice.value,
                "nPrice": nPrice.value,
                "isPrice": isPrice.value,
                "address": address.value,
                "styleOne": styleOne.value,
                "styleTwo": styleTwo.value,
                "img1": src1,
                "img1": src2,
                "img1": src3,
                "img1": src4,
                "img1": src5
            },
            success: function (getModComResult) {
                if (getModComResult.code == "1" || getModComResult.code == 1) {
                    shade.className = "dn";
                    document.getElementsByTagName("body")[0].style.overflow = "auto";
                } else {
                    alert(getModComResult.msg);
                }
            },
            error: function () {
                if (getModComResult.code == "1" || getModComResult.code == 1) {
                    shade.className = "dn";
                    document.getElementsByTagName("body")[0].style.overflow = "auto";
                } else {
                    alert(getModComResult.msg);
                }
            }
        });
    }
}

function reset() {
    selUl2.className = "dn";
    selImg2.src = "../img/backManage/down.png";
    var coverLis = document.getElementById("cover").getElementsByTagName("li");
    var classify = coverLis[0].getElementsByTagName("b")[0];
    classify.innerText = '生活家电';
    var title = coverLis[4].getElementsByTagName("input")[0];
    title.value = '';
    var oPrice = coverLis[5].getElementsByTagName("input")[0];
    oPrice.value = '';
    var nPrice = coverLis[6].getElementsByTagName("input")[0];
    nPrice.value = '';
    var isPrice = coverLis[7].getElementsByTagName("input")[0];
    isPrice.value = '';
    var address = coverLis[8].getElementsByTagName("input")[0];
    address.value = '';
    var styleOne = coverLis[9].getElementsByTagName("input")[0];
    styleOne.value = '';
    var styleTwo = coverLis[10].getElementsByTagName("input")[0];
    styleTwo.value = '';
    var img1 = coverLis[11].getElementsByTagName("img");
    img1[0].src = '../img/backManage/upload.png';
    img1[1].src = '../img/backManage/upload.png';
    img1[2].src = '../img/backManage/upload.png';
    var img2 = coverLis[12].getElementsByTagName("img");
    img2[0].src = '../img/backManage/upload.png';
    img2[1].src = '../img/backManage/upload.png';
}
var coverLis = document.getElementById("cover").getElementsByTagName("li");
var img1 = coverLis[11].getElementsByTagName("img");
var imgBtn1 = coverLis[11].getElementsByTagName("p");
var imgUpload1 = coverLis[11].getElementsByTagName("input");

for (var i = 0; i < img1.length; i++) {
    imgUpload1[i].onchange = uploadImgs(imgUpload1[i], img1[i]);
}

var img2 = coverLis[12].getElementsByTagName("img");
var imgBtn2 = coverLis[12].getElementsByTagName("p");
var imgUpload2 = coverLis[12].getElementsByTagName("input");


//上传图片
function uploadImgs(upload, img) {
    var file = upload.files[0],
        reader = new FileReader(),
        image = new Image();

    if (file) {
        EXIF.getData(file, function () {
            Orientation = EXIF.getTag(this, 'Orientation');
        });
        reader.onload = function (ev) {
            image.src = ev.target.result;
            image.onload = function () {
                var imgWidth = this.width,
                    imgHeight = this.height;
                // 控制上传图片的宽高
                if (imgWidth > imgHeight && imgWidth > 750) {
                    imgWidth = 750;
                    imgHeight = Math.ceil(750 * this.height / this.width);
                } else if (imgWidth < imgHeight && imgHeight > 1334) {
                    imgWidth = Math.ceil(1334 * this.width / this.height);
                    imgHeight = 1334;
                }

                var canvas = document.createElement("canvas"),
                    ctx = canvas.getContext('2d');
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                if (Orientation && Orientation != 1) {
                    switch (Orientation) {
                        case 6:     // 旋转90度
                            canvas.width = imgHeight;
                            canvas.height = imgWidth;
                            ctx.rotate(Math.PI / 2);
                            // (0,-imgHeight) 从旋转原理图那里获得的起始点
                            ctx.drawImage(this, 0, -imgHeight, imgWidth, imgHeight);
                            break;
                        case 3:     // 旋转180度
                            ctx.rotate(Math.PI);
                            ctx.drawImage(this, -imgWidth, -imgHeight, imgWidth, imgHeight);
                            break;
                        case 8:     // 旋转-90度
                            canvas.width = imgHeight;
                            canvas.height = imgWidth;
                            ctx.rotate(3 * Math.PI / 2);
                            ctx.drawImage(this, -imgWidth, 0, imgWidth, imgHeight);
                            break;
                    }
                } else {
                    ctx.drawImage(this, 0, 0, imgWidth, imgHeight);
                }
                img.src = canvas.toDataURL("image/jpeg", 0.8);
            }
        }
        reader.readAsDataURL(file);
    }
}



