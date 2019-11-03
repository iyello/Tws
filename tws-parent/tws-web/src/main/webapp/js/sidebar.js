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

//获取后台数据
var Docking = {
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
                getHistoryData([
                    {
                        "psrc1": "../image/pic1.jpg",
                        "pid": "1",
                        "shop_price": "20.00"
                    },
                    {
                        "psrc1": "../image/pic2.jpg",
                        "pid": "2",
                        "shop_price": "40.00"
                    },
                    {
                        "psrc1": "../image/pic1.jpg",
                        "pid": "1",
                        "shop_price": "20.00"
                    },
                    {
                        "psrc1": "../image/pic2.jpg",
                        "pid": "2",
                        "shop_price": "40.00"
                    }
                ])
                
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
                    getCartData(getComResult.historyData);
                }
                else{
                    alert(getComResult.message);
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
        window.location.href='index.html';
    })
})