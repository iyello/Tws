package com.it6.tws.entity;



/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User implements java.io.Serializable {


	private String uid;
	private String username;
	private String password;
	private String autoaddress;
	private String autopconsignee;
	private String autotelephone;
	
	public String getAutoaddress() {
		return autoaddress;
	}
	public void setAutoaddress(String autoaddress) {
		this.autoaddress = autoaddress;
	}
	public String getAutopconsignee() {
		return autopconsignee;
	}
	public void setAutopconsignee(String autopconsignee) {
		this.autopconsignee = autopconsignee;
	}
	public String getAutotelephone() {
		return autotelephone;
	}
	public void setAutotelephone(String autotelephone) {
		this.autotelephone = autotelephone;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}