package com.it6.tws.entity;

public class MyOrderItem {
	private String itemid;
	private String pid;
	private int pnum; 
	private String classify1; 
	private String classify2;
	private int state;  
	private double subtotal;
	private String src;
	private String pname;
	private String username;
	
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getItemid() {
		return itemid;
	}
	public void setItemid(String itemid) {
		this.itemid = itemid;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public int getPnum() {
		return pnum;
	}
	public void setPnum(int pnum) {
		this.pnum = pnum;
	}
	public String getClassify1() {
		return classify1;
	}
	public void setClassify1(String classify1) {
		this.classify1 = classify1;
	}
	public String getClassify2() {
		return classify2;
	}
	public void setClassify2(String classify2) {
		this.classify2 = classify2;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public double getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	
}
