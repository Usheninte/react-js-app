import React, { Component } from 'react';

class Name extends Component {

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

    return (
      <h4 style={finesse}>
        {user_name ? user_name : 'No User Here'}
        {/* 
          1. if the value before the question mark is true
          2. display the value after the question mark
          3. otherwise display the value after the colon
        */}
      </h4>
    );
  
  }
}

export default Name;
