import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Services from "./components/Services";
import Login from "./components/Login";


function App() {
  return (
    <>
      {/* <div className="container">
        <div id="nav">
          <Navbar />
        </div>
        <div id="corousel">
          <Section1 />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="desc">description</div>
        <div id="features">Features</div>
        <div id="solutions">Business Solutions</div>
        <div id="info">info</div>
        <div id="inspiring">Inspiring Work</div>
        <div id="guides">Guides</div>
        <div id="footer">Footer</div>
      </div> */}
      <Login name={"Login"}/>
      
    </>
  );
}

export default App;
