import React, { Component } from 'react';

import Name from './Name';

class Intro extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  /* alertUser() {
    alert("I am Usheninte, The African!");
  } */

  render() {
    
    var finesse = {
      textAlign: 'center'
    };
    
    const salutation = ['Welcome', 'To', 'My', 'Dummy', 'React App'].map(greet => {
      return <p key={greet}>{greet}</p>;
    });

    return (
      <div style={finesse}>
        <h1>Hello</h1>
        <br />
        <h3>My name is</h3>
        <button onClick={() => { alert("I am Usheninte, The African!") }}> 
        {/* <button onClick={this.alertUser}> */}
          <h3><Name /></h3> 
        </button>
        <br /><br /><br />
        {salutation}
      </div>
    );
  
  }
}

export default Intro;
