import React from 'react';
import { createRoot } from "react-dom/client";
import 'antd/dist/antd.js'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return(
    <div className='page-container'>
    <div className='content-wrap'>
      <Navbar/>
    </div>
      <Footer/>
    </div>
  )
}

export default App;
