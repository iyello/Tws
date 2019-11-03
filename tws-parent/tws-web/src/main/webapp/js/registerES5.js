'use strict';

var Dom = {
    id: document.getElementById('id'),
    userName: document.getElementById('userName'),
    password: document.getElementById("password"),
    surePassword: document.getElementById("surePassword"),
    registerBtn: document.getElementsByTagName("button")[0]
};

var Register = function Register() { };

Register.prototype = {
    constructor: Register,
    initital: function initital() {
        Dom.registerBtn.onclick = function () {
            if (Dom.id.value == '') alert("请输入您的账号！"); else if (Dom.userName.value == '') alert("请输入您的用户名！"); else if (Dom.password.value == '') alert("请输入您的密码！"); else if (Dom.surePassword.value == '') alert("请确认您的密码！"); else if (Dom.password.value != Dom.surePassword.value) alert("两次密码输入不一致！"); else {
                $.ajax({
                    url: 'userAction_register.action',
                    type: 'post',
                    async: false,
                    cache: false,
                    data: {
                        "uid": Dom.id.value,
                        "username": Dom.userName.value,
                        "password": Dom.password.value
                    },
                    dataType: 'json',
                    success: function success(RegisterResult) {
                        if (RegisterResult.code == 1 || RegisterResult.code == "1") {
                            //如果是表单form的话  也会先执行form提交。提交之后就已经不在当前页面了。所以 window.location.href无效。所以加上了最后一句取消默认事件
                            window.location.href = "login.html";
                        } else {
                            alert(RegisterResult.msg);
                        }
                    },
                    error: function error() {
                        alert("网络传输有误！请检查网络连接！");
                    }
                });
            }
        };
    }
};

window.onload = function () {
    var register = new Register();
    register.initital();
};
