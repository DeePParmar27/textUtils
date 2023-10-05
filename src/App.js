//rfce

import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/aboutUs";
import TextForm from "./Components/TextForm";

import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  const [mode , setMode] = useState("light")
  const [btn , setBtn]   = useState("Enable dark mode")

  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode("dark")
      document.body.style.backgroundColor="grey"
      document.title= "Textutils-DarkMode"
      setBtn("Enable dark mode")
    }else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      document.title ="Textutils-LightMode"
      setBtn("Enable light mode")
    }
  };

  return (
<>

  <Router>
    
      <Navbar title="TextUtils" about="AboutUs" mode={mode} btn={btn} toggleMode={toggleMode} />
        <div className="container my-4">
        <Routes>

            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} /> 
            <Route path="/" element={ <TextForm/> } /> 
        
        </Routes>
        </div>
 </Router>     
    </>
  )
}

export default App;