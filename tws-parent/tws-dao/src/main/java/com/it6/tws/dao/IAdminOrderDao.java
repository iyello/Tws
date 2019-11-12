package com.it6.tws.dao;

import java.util.List;

import com.it6.tws.entity.OrderItem;

public interface IAdminOrderDao {

	Integer getTotalCount();

	List<OrderItem> getPageBean(int start, Integer pageSize);

	List<OrderItem> getPageBean(String pname, int start, Integer pageSize);


	void deleteOrderItemById(String itemID);

	OrderItem findOrderItemById(String itemid);

	void updateOrderItemState(OrderItem oitem);

	Integer getTotalCount(String pname);


}
