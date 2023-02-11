import { MainContainer } from "./components/MainContainer";
import {useState} from 'react'

function App() {

  const [container, setContainer]=useState('initial');

  const changeContainerState=()=>{
    if(container==='initial'){
      setContainer('changed');
    }
    else if(container!=='initial'){
      setContainer('initial');
    }
  }
  return (
     <div className="main-container">
      <MainContainer container={container} 
       changeContainerState={changeContainerState}
       />
     </div>
  );
}

export default App;

