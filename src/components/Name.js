import React, { Component } from 'react';

class Name extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    
    var finesse = {
      textAlign: 'center'
    }

    return (
      <div style={finesse}>
        Usheninte
      </div>
    );
  
  }
}

export default Name;
