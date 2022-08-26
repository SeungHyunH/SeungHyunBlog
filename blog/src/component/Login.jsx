import { useState,useCallback,useEffect } from 'react';
import axios from 'axios';
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState(false);
  const refreshToken = useCallback(()=>{//토큰발급
    axios.post('http://localhost:3001/user/auth/client-refresh',{}, {
      withCredentials:true
    }).then(res=> {
      if(res.data.error){console.log('갱신실패');return;}
      const {accessToken} = res.data.accessToken;
      setToken(res.data.accessToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLoggedIn(true)
    });
    
  },[]);
  
  useEffect(()=>{//토큰이 만료되었다면 갱신
    /*
    if(token){
      axios.get('http://localhost:3001/user/auth/verify-token',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
        },{
          withCredentials:true
      }).then(res=>{
        if(res.data.error){refreshToken();}
      });
    }else{
      refreshToken();
    }
    */
    refreshToken();
  },[refreshToken,token]);
  return (
    <div className="Login">
      <a href="http://localhost:3001/user/auth/google"> 구글로그인 </a>
      {isLoggedIn && <div >로그인 되었습니다.</div>}
      {!isLoggedIn && <div >로그인이 되지 않았습니다.</div>}
      <div>토큰 = {token}</div>
      <button onClick={()=>{
        console.log('?');
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
            console.log(res.data);
          }
        })
      }}>테스트</button>
      <button onClick={()=>{
        axios.post('http://localhost:3001/post/write',{
          "mainText":'',
          "title":"테스트",
          "url":null,
          "menu":"Test"
        },{
          withCredentials:true,
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        .catch(error=>console.log(error))
      }}>전송테스트</button>
      <button onClick={()=>{
        axios.get('http://localhost:3001/post/read',{
          params:{postId:1},
          headers:{
            'Authorization':`Bearer ${token}`
          }
        },{
          withCredentials:true
        }).then(res=>{
          if(res.status === 401|res.status === 402){
            console.log('토큰에러');
          }else if(res.status === 200){
            console.log(res.data.mainText);
          }
        })
      }}>읽기테스트</button>
      <button onClick={()=>{
        axios.get('http://localhost:3001/post/read-list',{
          params:{menu:'programmers/Level1',page:'0'},
        },{
          withCredentials:true
        }).then(res=>{
          if(res.status === 401|res.status === 402){
            console.log('토큰에러');
          }else if(res.status === 200){
            console.log(res.data);
          }
        })
      }}>게시물목록테스트</button>
    </div>
  );
}

export default Login;
