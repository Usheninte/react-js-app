import React, { Component } from 'react';

import Name from './components/Name';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  consoleLog() {
    console.log("Usheninte, The African!");
  }

  render() {
    
    var finesse = {
      textAlign: 'center'
    };

    return (
      <div style={finesse}>
        <h1>Hello</h1>
        <h3>My name is <Name /> </h3>
        {/* <button onClick={() => { console.log("Usheninte, The African!") }}> */}
        <button onClick={this.consoleLog}>
          <Name /> 
        </button>
      </div>
    );
  
  }
}

export default App;
