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
        {user_name}
      </h4>
    );
  
  }
}

export default Name;
