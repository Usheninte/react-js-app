import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './components/Intro';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    
    var finesse = {
      textAlign: 'center'
    };

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello World!</h1>
      </header>
      <div style={finesse}>
        <Intro />
      </div>
    </div>
    );
  
  }
}

export default App;
