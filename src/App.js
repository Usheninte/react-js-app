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
    
    var salutation = ['Welcome', 'To', 'My', 'React App'].map(function(greet) {
      return <p key={greet}>{greet}</p>;
    });

    return (
      <div style={finesse}>
        <h1>Hello</h1>
        <br />
        <h3>My name is</h3>
        {/* <button onClick={() => { console.log("I am Usheninte, The African!") }}> */}
        <button onClick={this.alertUser}>
          <h3><Name /></h3> 
        </button>
        <br /><br /><br />
        {salutation}
      </div>
    );
  
  }
}

export default App;
