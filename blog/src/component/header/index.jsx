import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();
  return (
    <Wrap onClick={()=>{
      Navigate("/login",{replace:true});
    }}>
      <Logo src = {'MainLogo.svg'}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  background-color: #1C3879;
  width: 100%;
  height: 100%;
`

const Logo = styled.img`
  width: 100%;
  height: 80%;
  padding-top: 1%;
`

export default Header
