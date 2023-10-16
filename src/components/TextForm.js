import React, { useState, useEffect } from 'react';

export default function TextForm(props) {
  const [text,setText]=useState('');  
   useEffect(() => {
    // This will run once when the component mounts
    setText('hello, it is text');
  }, []); 
const handleTextChange = (event) => {
   console.log("on change");
  setText(event.target.value);
  }; 
  const handleUpClick=()=>{
  console.log("Uppercase Clicked");
  let newText=text.toUpperCase();
  setText(newText);  
  }
   
const handleLowClick=()=>{
  console.log("Lower Clicked");
  let newText=text.toLowerCase();
  setText(newText);  
  }
const handleCapitalClick = () => {
  console.log("Capitalize Clicked");
  let words = text.split(' ');
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  let newText = capitalizedWords.join(' ');
  setText(newText);
}
 return(
  <>
   <div className="container" style={{color: props.mode==="dark"? 'white':"#042743"}} >
    <h1>{props.heading}</h1>	
     <div className="mb-3">
      <label htmlFor="myBox" className="form-label"></label>
     <textarea className="form-control" style={{backgroundColor: props.mode==="dark"? 'gray':"white",
      color:props.mode==="dark"? 'white':"#042743"}} id="myBox" value={text}  onChange={handleTextChange}  rows="8"></textarea>
     </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitalize Text</button>
   </div>  
   <div className="container my-3" style={{color: props.mode==="dark"? 'white':"#042743"}}>
    <h1>Your text summery</h1>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter something in the text box above to preview it here"}</p>
   </div>
  </>
  );


};