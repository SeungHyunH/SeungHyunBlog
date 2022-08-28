import React, { useState,useEffect, useCallback } from 'react';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';
import { useCookies } from 'react-cookie';
const User = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isLogin,setIsLogin] = useState(false);
  
  const Logout = useCallback(()=>{
    setIsLogin(false);
    removeCookie('user'); 
  },[removeCookie]);

  useEffect(()=>{
    if(cookies.user !== undefined){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  },[cookies.user]);
  return (
    <>
      {
        isLogin ? <LoginUser logout = {Logout}/> : <LogoutUser/>
      }
    </>
  )
};

export default User;