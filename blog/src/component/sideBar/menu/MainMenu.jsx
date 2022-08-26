import React from 'react';
import styled from 'styled-components';

const MainMenu = (props) => {
  return (
    <Wrap>
      <Empty/>
      {props.text}
      {
        props.closeMenu === undefined ? <div></div> :
        props.closeMenu ? <OpenCloseImage alt='open' src='openImage.svg'/> : <OpenCloseImage alt='close' src='closeImage.svg'/>
      }
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items : center;
  width: 100%;
  background-color: #EAE3D2;
  border-bottom: 1px solid #ffffff;
  font-size: 1rem;
`

const OpenCloseImage = styled.img`
  width: 1.5rem
`

const Empty = styled.div`
  width: 1rem;
`

export default MainMenu