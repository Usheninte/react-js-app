import React, { Component } from 'react';

class Name extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name_displayed: 'First Name'
    }
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    
    var finesse = {
      textAlign: 'center'
    };

    //code below assigns the props value of the Name component to 'user_name'
    //this makes it possible for the value of 'user_name' as called in the Name component
    //to be rendered appropriately
    const { user_name } = this.props;

    //code below binds the 'name_displayed' key in the this.state object to this.state
    //this make it possible for it to display its value whenever it is invoked in the Name component
    const { name_displayed } = this.state;

    return (
      <div style={finesse}>
        <p>{name_displayed}</p>
        <h4>{user_name ? user_name : 'Click Me!'}</h4>
        {/* 
          1. if the value before the question mark is true
          2. display the value after the question mark
          3. otherwise display the value after the colon
        */}
      </div>
    );
  
  }
}

export default Name;
