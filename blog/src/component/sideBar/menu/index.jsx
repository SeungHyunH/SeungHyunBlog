import React,{useState,useCallback} from 'react';
import styled from 'styled-components';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

const Menu = (props) => {
  const [closeSub,setCloseSub] = useState([false,false]);
  const closeSubMenu = useCallback((index)=>{
    const temp = [...closeSub];
    temp[index] = !temp[index];
    setCloseSub(temp);
  },[closeSub]);

  return (
    <Wrap>
      <MenuButton onClick={()=>props.setMenu('all')} ><MainMenu text = {'전체글보기'}/></MenuButton>
      <MenuButton onClick={()=>closeSubMenu(0)}><MainMenu text = {'Programmers'} closeMenu = {closeSub[0]}/></MenuButton>
      <SubWrap isHiden = {closeSub[0]}>
        <MenuButton onClick={()=>{props.setMenu('programmers/Level1')}}><SubMenu text = {'Level1'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('programmers/Level2')}}><SubMenu text = {'Level2'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('programmers/Level3')}}><SubMenu text = {'Level3'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('programmers/Level4')}}><SubMenu text = {'Level4'}/></MenuButton>
      </SubWrap>
      <MenuButton onClick={()=>closeSubMenu(1)}><MainMenu text = {'School-Project'} closeMenu = {closeSub[1]}/></MenuButton>
      <SubWrap isHiden = {closeSub[1]}>
        <MenuButton onClick={()=>{props.setMenu('School-Project/Eight-Queens-Problem')}}><SubMenu text = {'Eight-Queens-Problem'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('School-Project/Eight-Puzzle-Problem')}}><SubMenu text = {'Eight-Puzzle-Problem'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('School-Project/Tetris-AI')}}><SubMenu text = {'Tetris-AI'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('School-Project/NLP')}}><SubMenu text = {'NLP'}/></MenuButton>
        <MenuButton onClick={()=>{props.setMenu('School-Project/GRISE-Project')}}><SubMenu text = {'GRISE-Project'}/></MenuButton>
      </SubWrap>
      <MenuButton><MainMenu text = {'Blog-Project'}/></MenuButton>
      <MenuButton><MainMenu text = {'잡담'}/></MenuButton>
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

const MenuButton = styled.div`
  :hover{
    cursor: pointer;
  }
`

const SubWrap = styled.div`
  display: ${props => props.isHiden ? 'none' : 'block'};
`

export default Menu;