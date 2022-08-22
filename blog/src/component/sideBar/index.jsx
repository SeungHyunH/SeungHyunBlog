import React from 'react';
import styled from 'styled-components';
import Profile from './profile';
import User from './user';
import Menu from './menu';
const SideBar = () => {
  return (
    <Wrap>
      <ProfileWrap>
        <Profile/>
      </ProfileWrap>
      <UserWrap>
        <User/>
      </UserWrap>
      <MenuWrap>
        <Menu/>
      </MenuWrap>
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

const ProfileWrap = styled.div`
  height: 30%;
`

const UserWrap = styled.div`
  height: 10%;
`

const MenuWrap = styled.div`
  height: 60%;
`
export default SideBar