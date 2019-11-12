package com.it6.tws.utils;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate5.HibernateCallback;

public class PageHibernateCallback<T> implements HibernateCallback<List<T>>{
    
    private String hql;
    private String[] param;
    private int startIndex;
    private int pageSize;
    

    public PageHibernateCallback(String hql, String[] param,
            int startIndex, int pageSize) {
        super();
        this.hql = hql;
        this.param = param;
        this.startIndex = startIndex;
        this.pageSize = pageSize;
    }



    public List<T> doInHibernate(Session session) throws HibernateException {
        Query query = session.createQuery(hql);
        
        for(int i=0;i<param.length;i++)
        	query.setParameter(i, param[i]);

        
        query.setFirstResult(startIndex);
        query.setMaxResults(pageSize);
        
        return query.list();
    }

}