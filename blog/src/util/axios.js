const axios = require('axios');

const tokenRefresh = ()=>{
  axios.post('http://localhost:3001/user/auth/client-refresh',{}, {
    withCredentials:true
  }).then(res=> {
    if(res.data.error){console.log('갱신실패');return;}
    return res.data.accessToken;
  });
}

const getProfile = (token)=>{
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
      return res.data;
    }
  });
}

module.exports ={tokenRefresh,getProfile}