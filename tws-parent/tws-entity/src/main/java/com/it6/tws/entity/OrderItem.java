package com.it6.tws.entity;

public class OrderItem {
	private String itemid;
	private String pid;
	private int pnum; 
	private String classify1; 
	private String classify2;
	private int state;  
	private double subtotal;
	private String oid;
	
	
	
	public OrderItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderItem(String itemid, String pid, int pnum, String classify1, String classify2, int state,
			double subtotal, String oid) {
		super();
		this.itemid = itemid;
		this.pid = pid;
		this.pnum = pnum;
		this.classify1 = classify1;
		this.classify2 = classify2;
		this.state = state;
		this.subtotal = subtotal;
		this.oid = oid;
	}
	public String getOid() {
		return oid;
	}
	public void setOid(String oid) {
		this.oid = oid;
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
	
	
}
