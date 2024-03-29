import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import About from './views/About/About';
import Header from './components/Header/Header';
import Exposure from './views/Exposure/Exposure';
import Contact from './views/Contact/Contact';
import Success from './views/Success/Success';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exposure" element={<Exposure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
