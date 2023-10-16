
import 'socket.io-client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import './App.css';

function App() {
const [mode,setMode]=useState("light");	

const toggleMode=()=>{
if (mode==="light"){
	setMode("dark");
 	document.body.style.backgroundColor="#042743";
	}
	else {
  setMode("light");
 	document.body.style.backgroundColor="white";
	}
}
  return (
  <>
   <Navbar title="TextAnalyzer" search="Search" mode={mode} toggleMode={toggleMode}/>
   <div className="container">  
<TextForm mode={mode} heading="Enter your Text To Analyse"/>
 
       </div> 
 
  </>
  
  );
}

export default App;
