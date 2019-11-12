package com.it6.tws.service;



import com.it6.tws.entity.OrderItem;
import com.it6.tws.entity.PageBean;

public interface IAdminOrderService {

	public PageBean getPageBean(Integer currentPage, Integer pageSize);

	public PageBean getPageBean(String pname, Integer currentPage, Integer pageSize);



	public void deleteOrderItemById(String itemID);


	public OrderItem findOrderItemById(String itemid);

	public void updateOrderItemState(OrderItem oitem);

}
