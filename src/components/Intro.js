import React, { Component } from 'react';

import Name from './Name';

class Intro extends Component {

  /* constructor(props) {
    super(props);
    this.state = {
      greet: ['Welcome', 'To', 'My', 'Dummy', 'React App']
    }
  } */

  constructor(props) {
    super(props);
    this.state = {
      greet: 'Habari za Asubuhi!'
    }
  }

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
    
    /* let greet = this.state.greet;
    const salutation = greet.map(hello => {
      return <p key={hello}>{hello}</p>;
    }); */

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
        {this.state.greet}
      </div>
    );
  
  }
}

export default Intro;
