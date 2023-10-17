
import 'socket.io-client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
import './App.css';

function App() {
const [mode,setMode]=useState("light");	
const [alert,setAlert]=useState(null);	

const showAlert=(message,type)=>{
 setAlert({
  msg:message,
  type:type 
 })
 setTimeout(()=>{
setAlert("null") 
 },1500)
}

const toggleMode=()=>{
if (mode==="light"){
	setMode("dark");
 	document.body.style.backgroundColor="#042743";
 	showAlert("Dark mode has been enabled","success");
 	document.title="Text Editor - Dark Mode"
	}
	else {
  setMode("light");
 	document.body.style.backgroundColor="white";
 	showAlert("Light mode has been enabled","success");
 	document.title="Text Editor - Light Mode"
	}
}
  return (
  <>
   <Navbar title="TextAnalyzer" search="Search" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">  
   <TextForm showAlert={showAlert} mode={mode} heading="Enter your Text To Analyse"/>
       </div> 
  </>
  
  );
}

export default App;
