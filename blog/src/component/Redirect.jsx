import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Redirect = () => {
  const [cookie,setCookie] = useCookies();
  const [token, setToken] = useState('');
  const Navigate = useNavigate();
  useEffect(()=>{
    axios.post('http://localhost:3001/user/auth/client-refresh',{}, {
      withCredentials:true
    }).then(res=> {
      if(res.data.error){console.log('갱신실패');return;}
      setToken(res.data.accessToken)
    });
  },[]);
  useEffect(()=>{
    if(token !== ''){
      axios.get('http://localhost:3001/user/auth/get-userinfo',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      },{
        withCredentials:true
      }).then(res=>{
        if(res.status === 401|res.status === 402){
          console.log('토큰에러');
        }else if(res.status === 200){
          setCookie('user',{
            token : token,
            name : res.data['name'],
            picture : res.data['picture'],
            user_type : res.data['user_type']
          });
          Navigate('/',{replace:true});
        }
      });
    }
  },[token])
  return (
    <></>
  )
}

export default Redirect