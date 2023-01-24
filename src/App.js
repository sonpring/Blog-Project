import './App.css';
import { useState, useRef, useEffect } from "react";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
const DIVIDER_HEIGHT = 5;

function App() {

  return (
    <div className="outer">
        <div className = "page1">
            <Page1/>
        </div>
        <div className = "page2">
            <Page2/>
        </div>
        <div className = "page3">
            <Page3/>
        </div>
        <div className = "page4">
            <Page4/>
        </div>
        <div className = "page5">
            <Page5/>
        </div>
    </div>
  );
}

export default App;
