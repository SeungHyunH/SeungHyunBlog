import { useState } from 'react';
import axios from 'axios';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="App">
      <a href="http://localhost:3001/user/auth/google"> 구글로그인 </a>
      <div onClick = {()=>{
         axios.post('http://localhost:3001/user/auth/client-refresh',{}, {
          withCredentials:true
        }).then(res=> {
          console.log(res);
          const {accessToken} = res.data;
          console.log(accessToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          setIsLoggedIn(true)
        });
      }}>리프레쉬</div>
      {isLoggedIn && <nav >로그인 되었습니다.</nav>}
      {!isLoggedIn && <nav >로그인이 되지 않았습니다.</nav>}
    </div>
  );
}

export default App;
