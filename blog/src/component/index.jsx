import React,{useState} from 'react';
import Header from './header';
import SideBar from './sideBar';
import Main from './main';
import styled from 'styled-components';

const Index = () => {
  const [menu,setMenu] = useState('all');
  return (
    <Wrap>
      <SideWrap>
        <SideBar setMenu = {setMenu}/>
      </SideWrap>
      <MainWrap>
        <HeaderWrap>
          <Header set = {setMenu}/>
        </HeaderWrap>
        <PageWrap>
          <Main set = {setMenu} menu = {menu}/>
        </PageWrap>
      </MainWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`

const MainWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`

const SideWrap = styled.div`
  width: 15%;
`

const HeaderWrap = styled.div`
  height: 15%;
`

const PageWrap = styled.div`
  height: 85%;
`

export default Index