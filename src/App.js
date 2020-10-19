import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Tree from "./components/Tree";

function App() {
  return (
    <div className="App">
      <header className="App-headers">
        <h2>Tree Structure</h2>
      </header>
      <Tree />
    </div>
  );
}

export default App;
