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
      user_name: 'Usheninte',
      interest1: '...',
      interest2: '...'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      user_name: 'Ninte',
      interest1: 'Poet',
      interest2: 'Coder'
    })
  }

  handleRefresh() {
    window.location.reload();
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
        <p>My name is</p>
        <Name user_name={this.state.user_name}/>
        <p>... Yeah ...</p>
        <h2 className="king">{this.state.user_name}</h2>
        <p>I am a {this.state.interest1} & a {this.state.interest2}</p>
        {/* <button onClick={() => { alert("I am Usheninte, The African!") }}>  */}
        {/* <button onClick={this.alertUser}> */}
        <button onClick={this.handleClick}>
          <Name /> 
        </button>
        <br /><br /><br />
        <button onClick={() => this.handleRefresh()}>
          <h5>Refresh</h5>
        </button>
        {/* <h4><a href="#">Refresh Page</a></h4> */}
      </div>
    );
  
  }
}

export default Intro;
