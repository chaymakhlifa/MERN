import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Routing from './component/Routing';
import Number from './component/Number';
import Word from './component/Word';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Routing/>} />
      <Route path="/4" element={<Number/>} />
      <Route path="/hello" element={<Word/>} />
      <Route path="/:Hello/:color/:bgcl" element={<Hello/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
