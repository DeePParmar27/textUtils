import React,{useState} from 'react'


export default function TextForm(props) {
  
  const [text,setText]=useState('enter the text')
  
  const upClick=()=>
  {
    console.log('clicked uppercase')
    let newText=text.toUpperCase();
    setText(newText);
    
  }

  const lowClick=()=>
  {
    console.log("clicked for case");
    let newText=text.toLowerCase();
    setText(newText);
  }

  const clearClick=()=>
  {
    console.log("clicked on clear")
    let newText=' ';
    setText(newText);
  }




  const upChange=(event)=>
  {
    setText(event.target.value) 
  }

  const lowcase=(event)=>
  {
    console.log('clicked lowercase')
    setText(event.target.value)
    
  }

  const reverse=(event)=>
  {
    console.log('clicked reverse')
    setText(event.target.value)
    
  }





  return (
    <>
    <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
           
          <textarea className="form-control" value={text} id="myBox" onChange={upChange} onClick={lowcase} onReverse={reverse} rows="8"></textarea>
         <div className="btn btn-primary my-3" onClick={upClick} >Convert to uppercase</div>

        <div className="btn btn-primary my-3 mx-4" onClick={lowClick} >Convert to lowerCase</div>
        <div className="btn btn-primary my-3 mx-4" onClick={clearClick} >Clear</div>


       </div>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>your text summary</h2>
    <p> {text.split(" ").length} words and {text.length}characters</p>
    <h2>preview</h2>
    <p>{text}</p>

    </div>
    </>  
  )
}