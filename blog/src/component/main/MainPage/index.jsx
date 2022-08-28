import React, { useEffect, useState } from 'react'
import EditorPage from './EditorPage'
const MainPage = ({data}) => {
  const [text,setText] = useState('');
  useEffect(()=>{
    setText(data.mainText);
  },[data]);
  return (
    <EditorPage text = {text}/>
  )
}

export default MainPage