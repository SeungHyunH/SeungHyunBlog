import React from 'react'
import styled from 'styled-components'

const LogoutUser = () => {
  return (
    <Wrap>
      <SubWrap>
        <LoginLink href='http://localhost:3001/user/auth/google'>로그인하러가기</LoginLink>
        <Logo src = {'Login.svg'}/>
      </SubWrap>
      <SubWrap>
        <Search type={'text'}></Search>
        <SearchButton>검색</SearchButton>
      </SubWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F9F5EB;
  display: flex;
  flex-direction: column;
`

const SubWrap = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`


const Search = styled.input`
  width: 60%;
  height: 30%;
`

const SearchButton = styled.button`
  width: 20%;
  height: 50%;
`

const LoginLink = styled.a`
  width: 60%;
  text-align: center;
  :hover{
    color: black;
    text-decoration: none;
  }
  :visited{
    color: black;
    text-decoration: none;
  }
  :link{
    color: black;
    text-decoration: none;
  }
  :active{
    color: black;
    text-decoration: none;
  }
`

const Logo = styled.img`
  width: 12%;
  height: 70%;
`

export default LogoutUser