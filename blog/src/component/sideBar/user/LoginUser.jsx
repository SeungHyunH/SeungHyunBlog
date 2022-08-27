import React from 'react'
import styled from 'styled-components'
import { useCookies } from 'react-cookie';
const LoginUser = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  return (
    <Wrap>
      <SubWrap>
        <UserWrap>
          <UserIamge src={cookies.user['picture']}/>
          <UserName>{cookies.user['name']}님 안녕하세요</UserName>
        </UserWrap>
        <Logo src = {'Logout.svg'} onClick={()=>{
          props.logout();
        }}/>
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

const UserWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const UserIamge = styled.img`
  width: 20%;
  border-radius: 50%;
  padding: 5%;
`

const UserName = styled.div`
  font-size: 0.5rem;
`

const Logo = styled.img`
  width: 12%;
  height: 70%;
`

export default LoginUser