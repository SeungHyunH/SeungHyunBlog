import React, { useState,useEffect } from 'react';
import LoginUser from './LoginUser';
import LogoutUser from './LogoutUser';
import { useCookies } from 'react-cookie';
const User = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [isLogin,setIsLogin] = useState(false);
  useEffect(()=>{
    if(cookies.user !== undefined){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  },[cookies]);
  return (
    <>
      {
        isLogin ? <LoginUser/> : <LogoutUser/>
      }
    </>
  )
};

export default User;