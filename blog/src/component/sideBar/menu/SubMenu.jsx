import React from 'react';
import styled from 'styled-components';

const SubMenu = (props) => {
  return (
    <Wrap>
      <SubImage src='/subImage.svg' />
      {props.text}
      <Empty/>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items : center;
  width: 100%;
  background-color: #F9F5EB;;
  border-bottom: 1px solid #ffffff;
  font-size: 1rem;
`
const SubImage = styled.img`
  width: 1rem
`

const Empty = styled.div`
  width: 1rem;
`

export default SubMenu