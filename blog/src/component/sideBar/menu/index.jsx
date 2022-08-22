import React,{useState,useCallback} from 'react';
import styled from 'styled-components';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
const Menu = () => {
  const [closeSub,setCloseSub] = useState([false,false]);
  const closeSubMenu = useCallback((index)=>{
    const temp = [...closeSub];
    temp[index] = !temp[index];
    setCloseSub(temp);
  },[closeSub]);
  return (
    <Wrap>
      <MainMenu text = {'전체글보기'}/>
      <div onClick={()=>closeSubMenu(0)}><MainMenu text = {'Programmers'} closeMenu = {closeSub[0]}/></div>
      <SubWrap isHiden = {closeSub[0]}>
        <div onClick={()=>{}}><SubMenu text = {'Level1'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'Level2'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'Level3'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'Level4'}/></div>
      </SubWrap>
      <div onClick={()=>closeSubMenu(1)}><MainMenu text = {'School-Project'} closeMenu = {closeSub[1]}/></div>
      <SubWrap isHiden = {closeSub[1]}>
        <div onClick={()=>{}}><SubMenu text = {'Eight-Queens-Problem'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'Eight-Puzzle-Problem'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'Tetris-AI'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'NLP'}/></div>
        <div onClick={()=>{}}><SubMenu text = {'GRISE-Project'}/></div>
      </SubWrap>
      <MainMenu text = {'Blog-Project'}/>
      <MainMenu text = {'잡담'}/>
    </Wrap>
  )
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #EAE3D2;
`

const SubWrap = styled.div`
  display: ${props => props.isHiden ? 'none' : 'block'};
`

export default Menu