import React, { Component } from 'react';

import Name from './components/Name';

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
        <h1>Hello</h1>
        <h3>My name is <Name /> </h3>
      </div>
    );
  
  }
}

export default App;
