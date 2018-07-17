import React, { Component } from 'react';

import Name from './components/Name';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  alertUser() {
    alert("I am Usheninte, The African!");
  }

  render() {
    
    var finesse = {
      textAlign: 'center'
    };

    return (
      <div style={finesse}>
        <h1>Hello</h1>
        <h3>My name is <Name /> </h3>
        {/* <button onClick={() => { console.log("I am Usheninte, The African!") }}> */}
        <button onClick={this.alertUser}>
          <Name /> 
        </button>
      </div>
    );
  
  }
}

export default App;
