import React from 'react';
import Footer from './footer';
import Header from './header';
import SideBar from './sideBar';
import List from './list.jsx';
import Main from './post';
import styled from 'styled-components';

const Index = (props) => {

  return (
    <Wrap>
      <SideWrap>
        <SideBar/>
      </SideWrap>
      <MainWrap>
        <HeaderWrap>
          <Header/>
        </HeaderWrap>
        <PageWrap>
          {
            (props.page === undefined|| props.page === 'list') ? <List/>:<Main/>
          }
        </PageWrap>
        <FooterWrap>
          <Footer/>
        </FooterWrap>
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
  background-color: aliceblue;
`

const PageWrap = styled.div`
  height: 80%;
  background-color: aqua;
`

const FooterWrap = styled.div`
  height: 5%;
  background-color:red;
`

export default Index