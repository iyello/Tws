package com.it6.tws.service;

import com.it6.tws.entity.User;

public interface IUserService {

	public User login(User model);

	public String register(User user);

}
