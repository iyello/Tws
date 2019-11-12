package com.it6.tws.dao;

import com.it6.tws.dao.base.IBaseDao;
import com.it6.tws.entity.User;

public interface IUserDao extends IBaseDao<User> {

	public User findUserByUsernameAndPassword(String uid, String password);

	public String saveUser(User user);

	public User fingUserByUid(String uid);


	public void updateAddress(User user);

}
