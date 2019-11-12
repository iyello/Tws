package com.it6.tws.entity;

public class Orders {
	private String oid;
	private double total;
	private String address; 
	private String pconsignee; 
	private String telephone;
	private String uid;
	public String getOid() {
		return oid;
	}
	public void setOid(String oid) {
		this.oid = oid;
	}
	
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPconsignee() {
		return pconsignee;
	}
	public void setPconsignee(String pconsignee) {
		this.pconsignee = pconsignee;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	
	
}
