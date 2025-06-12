import logo from './photos/etz.webp';
import './App.css';
import React from 'react';
import { useState} from 'react';
import { useNavigate } from "react-router-dom";

function App() {

const [clicked, setClicked] = useState(false);
const navigate = useNavigate();

const  handlebutton = () => {
  setClicked(true);
   alert("Button clicked");
  navigate("/TskDash");
 
}

  return (

    <div className="App">
     <div className="Homelogo"> 
    <img src={logo}  
    alt=""/>
    </div>
   <div className="HomeText">
      <h1 > Welcome!, RISK & COMPLIANCE </h1>
      <p> A Standard Monitoring Tool for Operational Effectiveness. A recognized tool has been developed to closely monitor the effectiveness of standard implementation. It ensures consistent compliance and helps identify areas for continuous improvement.</p>
      </div>
    

      <div className="HomeButton">
      <button className="RCSA" onClick={handlebutton}>ISO 27001</button>
      <button className="RCSA">Vulnerability Assessment</button>
      <button className="RCSA">PCI</button>
      <button className="RCSA">ERM (Enterprise Risk Mgt.)</button>
      <button className="RCSA">Compliance Tool</button>
      <button className="RCSA" >Register</button>

          </div>
          
    </div>
)
}

export default App;
