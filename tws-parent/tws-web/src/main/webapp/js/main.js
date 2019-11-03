//全局
var c1Value = ""; //分类1
var c2Value = ""; //分类2
var goodsId = ""; //商品id
var firstClassify = ""; //商品一级分类
    
var NowBox ="";//记录是否打折
var NowPrice = ""; //记录显示的价格

//模拟数据
var wPriceValue = ['15.90','18.00','80.80']
var comment = [
    '宝贝不错，是正品，物美价廉，物超所值，样式新颖，值得购买。',
    '裙子很柔软，但是我个人上身效果不太理想。做工不错的。好评',
    '物廉价美！物流很快！售后服务也非常好！值得购买！',
    '时尚简约，百塔型的风格，休闲的时候穿着舒服比较喜欢，质量挺好的，物流也比较快。',
    '全五星好评，很不错的卖家，生意兴隆，期待下次合作'
]

//////////////////// 侧 边 栏 ///////////////////////////////////
//获取侧边栏足迹数据
function getHistoryData(hData){
    var str = "";
    var hUl = document.getElementById("sHistoryUl");
    for ( var i = 0; i < hData.length; i++) {
    	str +=  "<li>"+
                    "<img src='"+hData[i].psrc1+"'>"+
                    "<span>¥"+hData[i].shop_price+"</span>"+
                "</li>" ;
    }
    hUl.innerHTML = str
}

//获取侧边栏购物车
function getCartData(cData){
    var str = "";
    var cUl = document.getElementById("sCartUl");
    for ( var i = 0; i < cData.length; i++) {
    	str +=  "<li>"+
                    "<input type='checkbox' class='cartCheck' name='cCheck'/>"+
                    "<img src='"+cData[i].psrc1+"' class='cartPic'/>"+
                    "<div class='cartClassify'>"+
                        "<span>"+cData[i].classify1+"</span>"+
                        "<span style='display: block;margin-top:5px;'>"+cData[i].classify2+"</span>"+
                    "</div>"+
                    "<div class='cartNum'>"+
                        "<img src='../image/minus.png' class='cartBtn' id='cSubBtn'/>"+
                        "<span style='font-size:16px;' id='cartNum'>"+cData[i].buyNum+"</span>"+
                        "<img src='../image/plus.png' class='cartBtn' id='cAddBtn'/>"+
                    "</div>&nbsp;"+
                    "<div class='cartPrice'>"+
                        "¥<span id='cPirce'>"+cData[i].shop_price+"</span>"+
                    "</div>"+
                "</li>" ;
    }
    cUl.innerHTML = str

}


////////////////////////////////////////////////////////////////////////////////

//首部搜索框
var Dom = {
    topSearch: {
        input: document.getElementsByTagName("header")[0].getElementsByTagName("input")[0],
        aside: document.getElementsByTagName("header")[0].getElementsByTagName("aside")[0]
    }
}

//获取价格
function isDiscount(status,market_Price,shop_Price){
    console.log("打折");
    var bfBox = document.getElementById("bfPriBox");
    var afBox = document.getElementById("afPriBox");
    var bfPri1 = document.getElementById("beforePrice1");
    var afPri = document.getElementById("afterPrice");
    var bfPri2 = document.getElementById("beforePrice2");
    //不打折
    if(status != 1){
        afBox.style.display = "none";
        bfBox.style.display = "inline";
        bfPri1.innerHTML = (market_Price).toFixed(2); 
        NowBox = bfPri1
        NowPrice = market_Price
    }
    //打折
    else{
        afBox.style.display = "inline";
        bfBox.style.display = "none";
        bfPri2.innerHTML = (market_Price).toFixed(2) ;
        afPri.innerHTML = (shop_Price).toFixed(2);
        NowBox = afPri
        NowPrice = shop_Price
    }
}

//获取商品两个分类数据，自动生成li
function getClassify(classify1,classify2,classifyLen1,classifyLen2){
    var c1 = document.getElementById("classify1");
    var c2 = document.getElementById("classify2");
    var cDt1 = document.getElementById("cDt1");
    var cDt2 = document.getElementById("cDt2");
    var str1 = "";
    var str2 = "";
    //切割分类名，在中间加空格
    cDt1.innerHTML = classify1[0].charAt(0)+"&nbsp;&nbsp;&nbsp;&nbsp;"+classify1[0].charAt(1)+":&nbsp;";
    cDt2.innerHTML = classify2[0].charAt(0)+"&nbsp;&nbsp;&nbsp;&nbsp;"+classify2[0].charAt(1)+":&nbsp;";
    for(var i=1; i<classifyLen1; i++){
        str1 += "<li><span>"+classify1[i]+"</span></li>"
    }
    for(var i=1; i<classifyLen2; i++){
        str2 += "<li><span>"+classify2[i]+"</span></li>"
    }
    c1.innerHTML = str1;
    c2.innerHTML = str2;
}


//获取商品标题、发货地、图片
function getGoodsData(src1,src2,src3,src4,src5,title,address,historyData){
    var titleId = document.getElementById("title");
    var addressId = document.getElementById("address");
    var str = "" //自动生成浏览列表

    console.log(address);
    titleId.innerHTML = title;
    addressId.innerHTML = address;

    //获取图片
    var showImg = $("#showButtom ul li img");
    $(showImg[0]).attr("src", src1);//改变src
    $(showImg[1]).attr("src", src2);//改变src
    $(showImg[2]).attr("src", src3);//改变src
    $(showImg[3]).attr("src", src4);//改变src

    //大图绑定第一张
    $("#showPic").attr("src", src1);

    //商品详情图片
    var detailImg = $("#detail li img");
    $(detailImg[0]).attr("src", src5);//改变src
    
    //看了又看内容
    var historyUl = document.getElementById("wPicBoxUl");
    for ( var i = 0; i < historyData.length; i++) {
    	str += "<li>"+
					"<img src='"+historyData[i].psrc1+"' class='wPic'>"+
					"<div class='wPrice'>¥"+
						"<span>"+historyData[i].shop_price+"</span>"+
					"</div>"+
				"</li>"
    }
    historyUl.innerHTML = str
    
    //获取评价
    var contentP = $("#content ul li p");
    for ( var i = 0; i < 5; i++) {
        $(contentP[i]).text(comment[i]);
    }
}


//加载左边图片
$("#showButtom ul li img").each(function(index){
    $(this).mouseover(function(){
        console.log("执行");
        const liNode = $(this);
        console.log( $(this)[0].src);
       
        $("#showPic").attr("src", $(this)[0].src);
    })
})
//获取后台数据
var Docking = {
    recommend1: function() {
        console.log("接口recommend1");
        $.ajax({
            url:"productAction_detailProduct.action",//路径
            type:"post",//方法
            async:false,//是否缓存
            dataType:"json",//返回值类型
            success: function(getComResult) {
                //成功
                if(getComResult.code == "1" ||getComResult.code == 1 ){
                    //获取id
                    goodsId = getComResult.data.pid;
                    //获取一级分类
                    firstClassify = getComResult.data.cid;
                    //调用函数生成页面数据 
                    getGoodsData(
                        getComResult.data.psrc1,
                        getComResult.data.psrc2,
                        getComResult.data.psrc3,
                        getComResult.data.psrc4,
                        getComResult.data.psrc5,
                        getComResult.data.pname,
                        getComResult.data.paddress,
                        getComResult.historyData //看了又看数据为对象数组
                    )
                    //调用函数生成页面数据
                    isDiscount(getComResult.data.pstatus,
                        getComResult.data.market_price,
                        getComResult.data.shop_price
                    )
                    //调用函数生成两个分类信息
                    getClassify(getComResult.classify1, 
                                getComResult.classify2,
                                getComResult.classify1.length,
                                getComResult.classify2.length
                    )
                }
                else{
                    alert(getComResult.msg);
                }   
            },
            error: function error() {
                alert("网络传输有误！请检查网络连接！");
//                var getComResult = {
//                    "code": 1,
//                    "msg": "成功返回商品详情",
//                    "uid": "用户账号",
//                    "classify1": ["分类","大号","中号","小号"],
//                    "classify2": ["口味","薰衣草","香草","柠檬"],
//                    "data": {
//                        "psrc1": "../image/pic1.jpg",
//                        "psrc2": "../image/pic1.jpg",
//                        "psrc3": "../image/pic1.jpg",
//                        "psrc4": "../image/pic1.jpg",
//                        "psrc5": "../image/pic1.jpg",
//                        "pid":  "1",
//                        "cid":  "2",
//                        "pstatus": "1",
//                        "pname":"秋冬连帽卫衣女潮ins宽松韩版上衣薄款春秋装2019新款中长款外套",
//                        "market_price": "40.00",
//                        "shop_price": "20.00",
//                        "paddress": "广东广州",
//                    },
//                    "historyData":[{
//                        "psrc1": "../image/pic1.jpg",
//                        "pid":  "1",
//                        "shop_Price": "20.00"
//                        },
//                        
//
//                    ]
//                };
//                // //获取id
//                 goodsId = getComResult.data.pid;
//                // //获取一级分类
//                firstClassify = getComResult.data.cid;
//                //调用函数生成页面数据 
//                getGoodsData(
//                    getComResult.data.psrc1,
//                    getComResult.data.psrc2,
//                    getComResult.data.psrc3,
//                    getComResult.data.psrc4,
//                    getComResult.data.psrc5,
//                    getComResult.data.pname,
//                    getComResult.data.paddress,
//                    getComResult.historyData //看了又看数据为对象数组
//                )
//                //调用函数生成页面数据
//                isDiscount(getComResult.data.pstatus,
//                    getComResult.data.market_price,
//                    getComResult.data.shop_price
//                )
//                //调用函数生成两个分类信息
//                getClassify(getComResult.classify1, 
//                            getComResult.classify2,
//                            getComResult.classify1.length,
//                            getComResult.classify2.length
//                ) 
            }
        });
    },
    //点击加入购物车
    recommend2: function(num){
        $.ajax({
            url:"productAction_addToCart.action",//路径
            type:"post",//方法
            async:false,//是否缓存
            dataType:"json",//返回值类型
            data:{
                 "pid" : goodsId,
                 "buyNum" : num,
                 "classify11" : c1Value,
                 "classify22" : c2Value,
                 "buyMoney" : NowPrice
            },
            success: function(getComResult) {
                //成功
                if(getComResult.code == "1" ||getComResult.code == 1 ){
                    alert(getComResult.msg)
                }
                else{
                }   
            },
            error: function error() {
                alert("网络传输有误！请检查网络连接！");
            }
            
        })
    },
    //足迹
    sidebarRecommend1: function() {
        console.log("接口sidebarRecommend");
        $.ajax({
            url:"productAction_historyProduct.action",//路径
            type:"post",//方法
            async:false,//是否缓存
            dataType:"json",//返回值类型
            success: function(getComResult) {
                //成功
                if(getComResult.code == "1" ||getComResult.code == 1 ){
                    //调用函数生成页面数据 
                    getHistoryData(getComResult.historyData);
                }
                else{
                    alert(getComResult.message);
                }   
            },
            error: function error() {
                alert("网络传输有误！请检查网络连接！");
//                getHistoryData([
//                    {
//                        "psrc1": "../image/pic1.jpg",
//                        "pid": "1",
//                        "shop_price": "20.00"
//                    },
//                    {
//                        "psrc1": "../image/pic2.jpg",
//                        "pid": "2",
//                        "shop_price": "40.00"
//                    },
//                    {
//                        "psrc1": "../image/pic1.jpg",
//                        "pid": "1",
//                        "shop_price": "20.00"
//                    },
//                    {
//                        "psrc1": "../image/pic2.jpg",
//                        "pid": "2",
//                        "shop_price": "40.00"
//                    }
//                ])
                
            }
        });
    },
    //购物车
    sidebarRecommend2: function() {
        console.log("接口sidebarRecommend2");
        $.ajax({
            url:"productAction_getCart.action",//路径
            type:"post",//方法
            async:false,//是否缓存
            dataType:"json",//返回值类型
            success: function(getComResult) {
                //成功
                if(getComResult.code == "1" ||getComResult.code == 1 ){
                    //调用函数生成页面数据 
                    getCartData(getComResult.data);
                }
                else{
                    alert(getComResult.msg);
                }   
            },
            error: function error() {
                alert("网络传输有误！请检查网络连接！");
                // getCartData([
                //     {
                //         "psrc1": "../image/pic1.jpg",
                //         "pid": "1",
                //         "shop_price": "20.00",
                //         "classify1": "黑色",
                //         "classify2": "均码",
	            //         "buyNum": "2",
                //     },
                //     {
                //         "psrc1": "../image/pic1.jpg",
                //         "pid": "1",
                //         "shop_price": "20.00",
                //         "classify1": "黑色",
                //         "classify2": "均码",
	            //         "buyNum": "4",
                //     },
                //     {
                //         "psrc1": "../image/pic1.jpg",
                //         "pid": "1",
                //         "shop_price": "20.00",
                //         "classify1": "白色",
                //         "classify2": "均码",
	            //         "buyNum": "2",
                //     },
                //     {
                //         "psrc1": "../image/pic1.jpg",
                //         "pid": "1",
                //         "shop_price": "20.00",
                //         "classify1": "均码",
                //         "classify2": "薰衣草味",
	            //         "buyNum": "4",
                //     }
                // ])
                
            }
        });
    }
}

//加载后执行函数
$(document).ready(function(){

//////////////////侧边栏/////////////////////////
    //调用接口
    Docking.sidebarRecommend1();
    Docking.sidebarRecommend2();

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
        //购物车并非展开，则收回去
        else if(isOutC === false){
            sLeft.style.right = "0px";
            hBox.style.right = "-336px";
            isOutH = false; //记录是否拉出来
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

    //点击数量选择框
    $("#sCartUl li").each(function(index){
        var txt=document.getElementById("cartNum");

        document.getElementById("cAddBtn").onclick = function () {
            if(txt.textContent<200){
                txt.textContent = parseInt(txt.textContent)+1;
            }
            else txt.textContent = 200;
        }

        document.getElementById("cSubBtn").onclick = function () {
            if(txt.textContent>1){
                txt.textContent = parseInt(txt.textContent)-1;
            }
        }
    })

    //全选
    document.getElementById("cartCheckAll").onclick = function(){
        console.log("全选")
        var checked = document.getElementById("cartCheckAll").checked;
        var checkson = document.getElementsByName("cCheck");
        if(checked){
            for(var i = 0; i < checkson.length ;i++){
                checkson[i].checked = true;
            }
        }else{
            for(var i = 0; i < checkson.length ;i++){
                checkson[i].checked = false;
            }
        }
        //计算件数
        console.log($("input[name='cCheck']:checked"))
        var len = $("input[name='cCheck']:checked").length
        document.getElementById("cartSum").textContent = len
        //计算总价格
        var total = 0;
        $("#sCartUl li").each(function(index){
            var price = $(this).find("#cPirce")[0].textContent ;
            console.log(price);
            total += parseFloat(price);
            document.getElementById("cartTotal").textContent = total.toFixed(2);
        })
    }

    //计算件数和总价
    $("input[name='cCheck']").click(function(){ 
        console.log($("input[name='cCheck']:checked"))
        var total = 0;
        var len = $("input[name='cCheck']:checked").length; 
        document.getElementById("cartSum").textContent = len ;
    })

    //删除
    $("#cartDelete").click(function(){
        $("#sCartUl li").each(function(index){
            //删除被选中的列
        if($(this).find("input[name='cCheck']:checked").is(":checked")) {
            $(this).remove();
        }
        })
    })

    //清空历史浏览
    $("#historyClean").click(function(){
        console.log("清空")
        $("#sHistoryUl li").remove();
        document.getElementById("emptyFont").style.display = "block"
    })

    //点击订单 ，跳转页面
    $("#bagSty").click(function(){
        console.log("跳转")
        window.location.href='myOrder.html';
    })

    //////////////////

    //调用接口
    Docking.recommend1();
    console.log(firstClassify)

    //首部搜索框
    Dom.topSearch.aside.onclick = function () {
        if (Dom.topSearch.input.value == "" || Dom.topSearch.input.value == " ")
            alert("请输入你想要搜索的商品!");
        else {
            window.open("topSearch.html?flag=true&A=" + Dom.topSearch.input.value, '_self');
        }
    }

    //点击切换标签页
    $("#tabarea ul li").each(function(index){ 
        $(this).click(function(){
            const liNode = $(this); 
            //将原来显示的内容进行隐藏
            console.log("点击标签")
            $("div.contentIn").removeClass("contentIn"); 
            //将原来有tabHover属性的标签去掉tabin属性 
            $("#tabarea ul li.tabHover").removeClass("tabHover"); 
            //将当前标签对应的内容区域显示出来 
            $("div.contentFirst").eq(index).addClass("contentIn"); 
            //$("div.contentfirst:eq(" + index + ")").addClass("contentin"); 
            //将当前标签增加tabHover属性 
            liNode.addClass("tabHover"); 
        });
    });
    //点击分类信息
    $("#classify1 li").click(function(){
        var len = $("#classify1").find("li").length; //获取li个数
        classify = $(this).find("span")[0].innerText; //获取分类1的值
        //一级分类不是衣物，价格改变
        if(firstClassify != "2"){
            switch(classify){
                case "大号" :
                case "大瓶" :
                case "大份" :
                case "24瓶" :
                case "大包" :
                    NowBox.innerHTML = (NowPrice).toFixed(2)
                    break;
                case "中号":
                case "中瓶" :
                case "中份" :
                case "16瓶" :
                case "中包" :
                    NowPrice = (NowPrice*0.9).toFixed(2)
                    NowBox.innerHTML = NowPrice
                    break;
                case "小号" :
                case "小瓶" :
                case "小份" :
                case "12瓶" :
                case "小包" :
                    NowPrice = (NowPrice*0.8).toFixed(2)
                    NowBox.innerHTML = NowPrice
                    break;
            }
            
        }
        //遍历li
        $("#classify1 li").each(function(index){
            //按钮回复原来
            this.style.width='84px'
            this.style.height='31px'
            this.style.borderColor='#b5b6b6';
            this.style.borderWidth='0.5px';
        });
        //点击的按钮改变
        this.style.width='81px'
        this.style.height='30px'
        this.style.borderColor='red';
        this.style.borderWidth='2px';
        c1Value = this.textContent;
    });
    $("#classify2 li").click(function(){
        // var len = $("#classify2").find("li").length; //获取li个数
        //遍历li
        $("#classify2 li").each(function(index){
            //按钮回复原来
            this.style.width='84px'
            this.style.height='31px'
            this.style.borderColor='#b5b6b6';
            this.style.borderWidth='0.5px';
        });
        //点击的按钮改变
        this.style.width='81px'
        this.style.height='30px'
        this.style.borderColor='red';
        this.style.borderWidth='2px';
        c2Value = this.textContent;
    });
    // $("#classify1 li").each(function(index){
    //     $(this).click(function(){
    //         this.style.borderColor='#69c6dd';
    //         this.style.borderWidth='2px';
    //     });
    // });
    //点击数量选择框
    var txt=document.getElementById('num');
    add=document.getElementById('addBtn');
    sub=document.getElementById('subBtn');

    add.onclick = function () {
        if(txt.value<200){
            txt.value = parseInt(txt.value)+1;
        }
        else txt.value = 200;
    }

    sub.onclick = function () {
        if(txt.value>1){
            txt.value = parseInt(txt.value)-1;
        }
    }

    //点击加入购物车
    $("#addIpt").click(function(){
        //调用购物车接口
        Docking.recommend2(txt.value);
    })

    //点击页面跳转

});


