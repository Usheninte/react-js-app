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
      <div style={finesse}>
        <Intro />
      </div>
    );
  
  }
}

export default App;
