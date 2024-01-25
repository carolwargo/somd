import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import About from './views/About/About';
import Header from './components/Header/Header';
import Exposure from './views/Exposure/Exposure';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exposure" element={<Exposure />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
