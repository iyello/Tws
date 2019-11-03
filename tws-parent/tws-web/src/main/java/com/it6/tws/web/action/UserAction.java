package com.it6.tws.web.action;

import java.io.IOException;
import java.util.List;


import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.it6.tws.entity.Product;
import com.it6.tws.entity.RestResponse;
import com.it6.tws.entity.User;
import com.it6.tws.service.IProductService;
import com.it6.tws.service.IUserService;
import com.it6.tws.web.action.base.BaseAction;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;



@Controller
@Scope("prototype")
public class UserAction extends BaseAction<User> {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private RestResponse<Product> rest;
	

	/**
	 * 用户登录
	 */
	public String login(){
		User user = userService.login(model);		
		ServletActionContext.getResponse().setContentType("application/json; charset=UTF-8");
		JSONObject json;
		if(user !=null){
			//登录成功,将user对象放入session，跳转到首页
			ServletActionContext.getRequest().getSession().setAttribute("loginUser", user);
			rest.setCode(1);
			rest.setMsg("登录成功");
			
		}else{
			rest.setCode(0);
			rest.setMsg("账号或者密码错误");
			
		}
		json= JSONObject.fromObject(rest);
		try {		
			String jsonStr=json.toString();
			ServletActionContext.getResponse().getWriter().write(jsonStr);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	
	/**
	 * 用户注册
	 */
	public String register() {
		String flag=null;
		flag=userService.register(model);
		//注册成功
		if(flag!=null)
		{
			rest.setCode(1);
			rest.setMsg("注册成功");
		}
		else
		{
			rest.setCode(0);
			rest.setMsg("已有该账号");
		}
		ServletActionContext.getResponse().setContentType("application/json; charset=UTF-8");
		String jsonStr= JSONObject.fromObject(rest).toString();
		try {		
			ServletActionContext.getResponse().getWriter().write(jsonStr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}


	
	

}
