import React from "react";
import logo from "./logo.png";
import "./App.css";
import Typing from "react-typing-animation";
import CheckFlowTypes from "./components/CheckFlowTypes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://flow.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
          <Typing speed={500}>
            <Typing.Delay ms={500} />
            low
          </Typing>
        </a>
        <p>STATIC TYPE CHECKER FOR JAVASCRIPT</p>
      </header>
      <CheckFlowTypes />
    </div>
  );
}

export default App;
