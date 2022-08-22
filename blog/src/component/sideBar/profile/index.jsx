import React from 'react';
import styled from 'styled-components';
const Profile = () => {
  return (
    <Wrap>
      <ProfileImage src='/profile.jpg' />
      <ProfileText>개발자 한승현의 블로그입니다.<br/>공부하고 만든것들을 소개하는 사이트입니다.</ProfileText>
    </Wrap>
  )
}

const Wrap = styled.div`
  background-color: #607EAA;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items : center;
`

const ProfileImage = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 50%;
  padding: 5%;
`

const ProfileText = styled.div`
  color: white;
  white-space: pre-wrap;
  text-align: center;
`

export default Profile;