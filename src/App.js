import React from 'react';
import './App.css';
import NavComponent from './Nav/NavComponent';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import Mywork from "./MyWork/Mywork";
import Contactus from "./ContactMe/Contactme";
import Aboutme from "./AboutMe/Aboutme";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Mywork />} />
        <Route path="/aboutme" element={<Aboutme />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contactme" element={<Contactus />}/>
      </Routes>
    </div>
  );
}

export default App;
