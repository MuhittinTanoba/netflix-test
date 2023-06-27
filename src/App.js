import React from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/movies" element={<Movies /> } />
          <Route path="/series" element={<Series /> } />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
