import React, {useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import MainPage from './MainPage';

const Main = (props) => {
  const [postCount,setPostCount] = useState(0);
  const [page,setPage] = useState(0);
  const [data,setData] = useState(null);

  useEffect(()=>{
    if(props.menu === null){
      axios.get('http://localhost:3001/post/get-post-count',{
        params:{menu:'all'},
      },{
        withCredentials:true
      }).then(res=>{
        setPostCount(res.data[0]['COUNT(*)']);
      });


      axios.get('http://localhost:3001/post/get-list',{
        params:{menu:'all',page:`${Math.floor(page/10)*10}`},
      },{
        withCredentials:true
      }).then(res=>{
        setData(res.data);
      });
    }else{
      axios.get('http://localhost:3001/post/get-post-count',{
        params:{menu:props.menu},
      },{
        withCredentials:true
      }).then(res=>{
        setPostCount(res.data[0]['COUNT(*)']);
      });

      axios.get('http://localhost:3001/post/get-list',{
        params:{menu:props.menu,page:`${Math.floor(page/10)*10}`},
      },{
        withCredentials:true
      }).then(res=>{
        setData(res.data);
      });
    }
  },[props.menu,page]);

  const getPageButton = useCallback(()=>{
    const result = [];
    const start = Math.floor(page/10)*10;
    for(let i = start; i < start+10; i++){
      if(i >= postCount){break;}
      result.push(<PageButton key = {i} onClick={()=>setPage(i)}>{i+1}</PageButton>);
    }
    return result;
  },[postCount,page]);
  return (
    <Wrap>
      <MainWrap>
        {
          data === null ? <MainPage data = ''></MainPage> : <MainPage data = {data[page%10]}></MainPage>
        }
      </MainWrap>
      <FooterWrap>
        <PageButton onClick={()=>setPage(0)}>{'<<'}</PageButton>
        <PageButton onClick={()=>{
          if(page >= 10){
            setPage(Math.floor((page-10)/10)*10);
          }
        }} >{'<'}</PageButton>
        {
          getPageButton()
        }
        <PageButton onClick={()=>{
          if(page < Math.floor(postCount/10)*10){
            setPage(Math.floor((page+10)/10)*10);
          }
        }}>{'>'}</PageButton>
        <PageButton onClick={()=>setPage(Math.floor(postCount/10)*10)}>{'>>'}</PageButton>
      </FooterWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const MainWrap = styled.div`
  height: 95%;
`

const FooterWrap = styled.div`
  margin-left:25%;
  margin-right:25%;
  height: 5%;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: space-evenly;
`

const PageButton = styled.div`
  :hover{
    cursor:pointer;
  }
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

export default Main;