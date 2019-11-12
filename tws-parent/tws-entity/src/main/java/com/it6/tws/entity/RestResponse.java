package com.it6.tws.entity;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class RestResponse<T> {
 
    private int code;
    private String msg;

 
 
    public RestResponse() {
       
    }
 
    public RestResponse(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }
 
 
    public int getCode() {
        return code;
    }
 
    public void setCode(int code) {
        this.code = code;
    }
 
    public String getMsg() {
        return msg;
    }
 
    public void setMsg(String msg) {
        this.msg = msg;
    }


 

}