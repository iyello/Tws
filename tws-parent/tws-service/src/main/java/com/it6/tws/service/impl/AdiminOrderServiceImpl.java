package com.it6.tws.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.it6.tws.dao.IAdminOrderDao;
import com.it6.tws.entity.OrderItem;
import com.it6.tws.entity.PageBean;
import com.it6.tws.service.IAdminOrderService;

@Service
@Transactional
public class AdiminOrderServiceImpl implements IAdminOrderService{
	@Autowired
	private IAdminOrderDao adminOrderDao;
	@Override
	public PageBean getPageBean(Integer currentPage, Integer pageSize) {
		// TODO Auto-generated method stub
		Integer totalCount=adminOrderDao.getTotalCount();
		PageBean pb=new PageBean(currentPage, totalCount, pageSize);
		List<OrderItem> list=adminOrderDao.getPageBean(pb.getStart(),pb.getPageSize());
		pb.setList(list);
		return pb;
	}
	
	@Override
	public PageBean getPageBean(String pname, Integer currentPage, Integer pageSize) {
		// TODO Auto-generated method stub
		Integer totalCount=adminOrderDao.getTotalCount(pname);
		PageBean pb=new PageBean(currentPage, totalCount, pageSize);
		List<OrderItem> list=adminOrderDao.getPageBean(pname,pb.getStart(),pb.getPageSize());
		pb.setList(list);
		return pb;
	}
	@Override
	public void deleteOrderItemById(String itemID) {
		// TODO Auto-generated method stub
		adminOrderDao.deleteOrderItemById(itemID);
	}
	@Override
	public OrderItem findOrderItemById(String itemid) {
		// TODO Auto-generated method stub
		return adminOrderDao.findOrderItemById(itemid);
	}
	@Override
	public void updateOrderItemState(OrderItem oitem) {
		// TODO Auto-generated method stub
		adminOrderDao.updateOrderItemState(oitem);
	}

}
