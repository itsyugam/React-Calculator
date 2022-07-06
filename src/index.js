import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Keypad from './components/keypad';
import About from './components/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    
    
    <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Keypad />} />
        <Route path="/about" element={<About />}/>
        </Route>
      </Routes>
    
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
