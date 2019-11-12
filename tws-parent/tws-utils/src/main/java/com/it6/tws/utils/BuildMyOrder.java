package com.it6.tws.utils;

import com.it6.tws.entity.MyOrderItem;
import com.it6.tws.entity.OrderItem;
import com.it6.tws.entity.Product;
import com.it6.tws.entity.User;

public class BuildMyOrder {
	public OrderItem orderItem;
	public Product pro;
	public MyOrderItem myOrderItem;
	public BuildMyOrder(OrderItem orderItem, String username, Product pro, MyOrderItem myOrderItem) {
		super();
		this.orderItem = orderItem;
		this.pro = pro;
		this.myOrderItem = myOrderItem;
		myOrderItem.setPid(pro.getPid());
		myOrderItem.setClassify1(orderItem.getClassify1());
		myOrderItem.setClassify2(orderItem.getClassify2());
		myOrderItem.setItemid(orderItem.getItemid());
		myOrderItem.setPname(pro.getPname());
		myOrderItem.setPnum(orderItem.getPnum());
		myOrderItem.setSrc(pro.getPsrc1());
		myOrderItem.setState(orderItem.getState());
		myOrderItem.setSubtotal(orderItem.getSubtotal());
		myOrderItem.setUsername(username);
	}
	public OrderItem getOrderItem() {
		return orderItem;
	}
	public void setOrderItem(OrderItem orderItem) {
		this.orderItem = orderItem;
	}
	public Product getPro() {
		return pro;
	}
	public void setPro(Product pro) {
		this.pro = pro;
	}
	public MyOrderItem getMyOrderItem() {
		return myOrderItem;
	}
	public void setMyOrderItem(MyOrderItem myOrderItem) {
		this.myOrderItem = myOrderItem;
	}
	
	
	
}
