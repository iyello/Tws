//数据
var orders = [
    {
        imgUrl:'../image/pic1.jpg',
        title:'面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"已收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'掏耳棉签包邮木棒婴儿棉棒黑色双头无菌掏耳朵尖头口红化妆用盒装',
        price:'60.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic2.jpg',
        title:'襄遇二阳手工小麻花128gX4袋装休闲食品整箱酥脆怀旧特产零食小吃',
        price:'40.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'【电子书赠品】记忆宫殿一本书快速提升记忆力 下载天猫读书读',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    {
        imgUrl:'../image/pic1.jpg',
        title:'面卡其2019新款泫雅风条纹宽松打底针织衫长袖平色字母套头毛衣女',
        price:'79.00',
        style:'白灰',
        amount:'1',
        goodsStatus:"确认收货"
    },
    
]


//获取拼接表格行 
var getTable = function(i,page){
    var thHtml = 
    "<tr>"+
        "<th>"+
            "<input type='checkbox' class='all' id='checkAll'/>"+
            "<span>全选&nbsp&nbsp&nbsp&nbsp</span>"+
            "<img src='../image/dele.png'/>"+
            "<span id='delete'>&nbsp删除</span>"+
        "</th>"+
        "<th>商品</th>"+
        "<th>价格</th>"+
        "<th>款式</th>"+
        "<th>数量</th>"+
        "<th>操作状态</th>"+
    "</tr>";
    var tdHtml = ""
    b = i + page
    for(i; i< b ;i++){
        tdHtml +=
            "<tr>"+
            "<td>"+
                "<input type='checkbox' name='check'/>"+
                "<img src='"+orders[i].imgUrl+"'>"+
            "</td>"+
            "<td>"+
                "<span class='title'>"+orders[i].title+"</span>"+
            "</td>"+
            "<td class='price'>"+
                "¥<span>"+orders[i].price+"</span>"+
            "</td>"+
            "<td class='style'>"+
                "<span>"+orders[i].style+"</span>"+
            "</td>"+
            "<td class='amount'>"+
                "<span>"+orders[i].amount+"</span>"+
            "</td>"+
            "<td class='status'>"+
                "<button>"+orders[i].goodsStatus+"</button>"+
            "</td>"+
        "</tr>"
        ;
    }
    var tableHtml = thHtml + tdHtml
    return tableHtml;
}


//js分页
//el:分页容器 count:总记录数 pageStep:每页显示多少个 pageNum:第几页 fnGo:分页跳转函数
var jsPage = function(el, count, pageStep, pageNum, fnGo) {
    this.getLink = function(fnGo, index, pageNum, text) {
        var s = '<a href="#p' + index + '" onclick="' + fnGo + '(' + index + ');" ';
        if(index == pageNum) {
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
        s += this.getLink(fnGo, pageNum-1, pageNum, '上一页');
    } else {
        s += '<span>上一页</span> ';
    }
    var begin = 1;
    if (pageNum - itemNum > 1) {
        s += this.getLink(fnGo, 1, pageNum) + '... ';
        begin = pageNum - itemNum;
    }
    var end = Math.min(pageNumAll, begin + itemNum*2);
    if(end == pageNumAll - 1){
        end = pageNumAll;
    }
    for (var i = begin; i <= end; i++) {
        s += this.getLink(fnGo, i, pageNum);
    }
    if (end < pageNumAll) {
        s += '... ' + this.getLink(fnGo, pageNumAll, pageNum);
    }
    if (pageNum < pageNumAll) {
        s += this.getLink(fnGo, pageNum+1, pageNum, '下一页');
    } else {
        s += '<span>下一页</span> ';
    }
    var divPage = document.getElementById(el);
    divPage.innerHTML = s;
}


//展示订单内容
function goPage(pageIndex) {
    var pageStep = 5 //每页显示数量
    document.querySelector('table').innerHTML = getTable((pageIndex-1)*pageStep,pageStep) //传参数为第n页的第一件商品的
    console.log("只是")
    jsPage('divPage', orders.length , pageStep , pageIndex, 'goPage');
}

//函数调用
goPage(1)


//删除行
document.getElementById("delete").onclick = function(){
    var tab=document.querySelector('table');
    for(var i=tab.rows.length-1;i>0;i--){
        if(tab.rows[i].cells[0].getElementsByTagName('input')[0].checked){
            tab.deleteRow(i);
            console.log(i)
            
        }
    }
    //刷新
    // location.reload()  
}


//全选
document.getElementById("checkAll").onclick = function(){
    console.log("全选")
    var checked = document.getElementById("checkAll").checked;
    var checkson = document.getElementsByName("check");
    if(checked){
        for(var i = 0; i < checkson.length ;i++){
            checkson[i].checked = true;
        }
    }else{
        for(var i = 0; i < checkson.length ;i++){
            checkson[i].checked = false;
        }
    }
}

// // 侧边栏变换
// //点击历史记录图标
var isOutH = false;//记录历史浏览是否拉出来
document.getElementById("historySty").onclick = function(){ 
    var hBox = document.getElementById("historyBox")
    var cBox = document.getElementById("cartBox")
    var sLeft = document.getElementById("sidebarLeft")
    cBox.style.display = "none"; //将购物车隐藏
    hBox.style.display = "block";
    console.log(isOutC)
    console.log(isOutH)
    if(isOutH === false){
        sLeft.style.right = "336px";
        hBox.style.right = "0px";
        isOutH = true; //记录是否拉出来
    }
    
    else{
        if(isOutC === true){
            
        }
        //购物车并非展开，则收回去
        else{
            sLeft.style.right = "0px";
            hBox.style.right = "-336px";
            isOutH = false; //记录是否拉出来
        }
    }
    
    
}

//点击购物车图标
var isOutC = false; //记录购物车是否拉出来
document.getElementById("cartSty").onclick = function(){ 
    var hBox = document.getElementById("historyBox")
    var cBox = document.getElementById("cartBox")
    var sLeft = document.getElementById("sidebarLeft")
    hBox.style.display = "none"; //将购物车隐藏
    cBox.style.display = "block";
    if(isOutC === false){
        sLeft.style.right = "336px";
        cBox.style.right = "0px";
        isOutC = true; //记录是否拉出来
    }
    //历史浏览并非展开，则收回去
    else if(isOutH === false){
        sLeft.style.right = "0px";
        cBox.style.right = "-336px";
        isOutC = false; //记录是否拉出来
    }
    
}