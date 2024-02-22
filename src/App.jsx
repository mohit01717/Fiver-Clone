import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";

function App() {
  return (
    <>
      <div className="container">
        <div id="nav">
          <Navbar />
        </div>
        <div id="corousel">
        <Section1/>
        </div>
        <div id="services">Services</div>
        <div id="desc">description</div>
        <div id="features">Features</div>
        <div id="solutions">Business Solutions</div>
        <div id="info">info</div>
        <div id="inspiring">Inspiring Work</div>
        <div id="guides">Guides</div>
        <div id="footer">Footer</div>
      </div>
    </>
  );
}

export default App;
