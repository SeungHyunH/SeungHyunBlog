import React,{ useEffect ,useRef} from 'react'
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
const EditorPage = (props) => {
  const viwerRef = useRef();
  useEffect(()=>{
    viwerRef.current?.getInstance().setMarkdown(props.text);
  },[props.text])
  return (
    <Viewer ref={viwerRef} initialValue={props.text||''}/>
  )
}

export default EditorPage