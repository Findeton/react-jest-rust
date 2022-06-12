import React from 'react';
import logo from './logo.svg';
import './App.css';
import init, {test} from 'rust-wasm-lib';

init().then(() => console.log("rust-wasm-lib initialised"))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="button" onClick={test}>
          Run test
        </div>
      </header>
    </div>
  );
}

export default App;
