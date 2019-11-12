package com.it6.tws.entity;



import java.util.Date;

import com.it6.tws.entity.MainCategory;


public class Product implements java.io.Serializable{
	private String pid;
	private String pname;
	private String cid;
	private String classify1;
	private String classify2;
	

	private Double market_price;  
	private Double shop_price; 
	private String  psrc1;  
	private String  psrc2;  
	private String psrc3; 
	private String  psrc4;  
	private String  psrc5;  
	private int  pstatus;
	private String  paddress;

	
	
	


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
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public Double getMarket_price() {
		return market_price;
	}
	public void setMarket_price(Double market_price) {
		this.market_price = market_price;
	}
	public Double getShop_price() {
		return shop_price;
	}
	public void setShop_price(Double shop_price) {
		this.shop_price = shop_price;
	}

	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}

	public String getPsrc1() {
		return psrc1;
	}
	public void setPsrc1(String psrc1) {
		this.psrc1 = psrc1;
	}
	public String getPsrc2() {
		return psrc2;
	}
	public void setPsrc2(String psrc2) {
		this.psrc2 = psrc2;
	}
	public String getPsrc3() {
		return psrc3;
	}
	public void setPsrc3(String psrc3) {
		this.psrc3 = psrc3;
	}
	public String getPsrc4() {
		return psrc4;
	}
	public void setPsrc4(String psrc4) {
		this.psrc4 = psrc4;
	}
	public String getPsrc5() {
		return psrc5;
	}
	public void setPsrc5(String psrc5) {
		this.psrc5 = psrc5;
	}

	public int getPstatus() {
		return pstatus;
	}
	public void setPstatus(int pstatus) {
		this.pstatus = pstatus;
	}
	public String getPaddress() {
		return paddress;
	}
	public void setPaddress(String paddress) {
		this.paddress = paddress;
	}


	

	
	
}
