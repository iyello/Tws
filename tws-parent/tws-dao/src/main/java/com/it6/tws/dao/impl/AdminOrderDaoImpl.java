package com.it6.tws.dao.impl;

import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.it6.tws.dao.IAdminOrderDao;
import com.it6.tws.dao.base.impl.BaseDaoImpl;
import com.it6.tws.entity.OrderItem;
import com.it6.tws.utils.PageHibernateCallback;

@Repository
public class AdminOrderDaoImpl extends BaseDaoImpl<OrderItem> implements IAdminOrderDao{

	@Override
	public Integer getTotalCount() {
		// TODO Auto-generated method stub
		DetachedCriteria detached=DetachedCriteria.forClass(OrderItem.class);
		detached.setProjection(Projections.rowCount());
		List<Long> list =  (List<Long>) this.getHibernateTemplate().findByCriteria(detached);
		if(list!=null&&list.size()>0) {
			Long len=list.get(0);
			return len.intValue();
		}
		else return null;

	}

	@Override
	public Integer getTotalCount(String pname) {
		// TODO Auto-generated method stub
		String p="%"+pname+"%";
		String hql = "select count(*) from OrderItem oi,Product p where oi.pid=p.pid and p.pname like ?";
		Long count = (Long)getHibernateTemplate().find(hql,p).listIterator().next();
		return count.intValue();
	}

	@Override
	public List<OrderItem> getPageBean(int start, Integer pageSize) {
		// TODO Auto-generated method stub
		DetachedCriteria detached=DetachedCriteria.forClass(OrderItem.class);
		
		List<OrderItem> list= (List<OrderItem>) this.getHibernateTemplate().findByCriteria(detached,start,pageSize);
		
		if(list!=null&&list.size()>0)
			return list;
		else return null;
	}

	@Override
	public List<OrderItem> getPageBean(String pname, int start, Integer pageSize) {
		String p="%"+pname+"%";
		String parr[]=new String[1];
		parr[0]=p;
		// TODO Auto-generated method stub
		String hql="select new com.it6.tws.entity.OrderItem(oi.itemid,oi.pid,oi.pnum,oi.classify1,oi.classify2,oi.state,oi.subtotal,oi.oid) FROM OrderItem oi,Product p where oi.pid=p.pid and p.pname like ?";      
		List<OrderItem> orderList=(List<OrderItem>) this.getHibernateTemplate().execute(
				(HibernateCallback<OrderItem>) new PageHibernateCallback(hql,parr,start, pageSize));
		
        if(orderList!=null&&orderList.size()>0)
            return orderList;
        return null;
	}

	@Override
	public void deleteOrderItemById(String itemID) {
		// TODO Auto-generated method stub
		OrderItem oitem=new OrderItem();
		oitem.setItemid(itemID);
		this.getHibernateTemplate().delete(oitem);
	}

	@Override
	public OrderItem findOrderItemById(String itemid) {
		// TODO Auto-generated method stub
		return this.findById(itemid);
	}

	@Override
	public void updateOrderItemState(OrderItem oitem) {
		// TODO Auto-generated method stub
		this.save(oitem);
	}

	

}
