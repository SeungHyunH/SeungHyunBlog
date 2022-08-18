import { useState,useCallback,useEffect } from 'react';
import axios from 'axios';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState(false);
  const refreshToken = useCallback(()=>{//토큰발급
    axios.post('http://localhost:3001/user/auth/client-refresh',{}, {
      withCredentials:true
    }).then(res=> {
      if(res.data.error){console.log('갱신실패');}

      const {accessToken} = res.data.accessToken;
      setToken(res.data.accessToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setIsLoggedIn(true)
    });
  },[]);
  
  useEffect(()=>{//토큰이 만료되었다면 갱신
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
  },[refreshToken,token]);
  return (
    <div className="App">
      <a href="http://localhost:3001/user/auth/google"> 구글로그인 </a>
      {isLoggedIn && <nav >로그인 되었습니다.</nav>}
      {!isLoggedIn && <nav >로그인이 되지 않았습니다.</nav>}
    </div>
  );
}

export default App;
