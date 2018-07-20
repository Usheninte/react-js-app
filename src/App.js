import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    
    /* var finesse = {
      textAlign: 'center'
    }; */

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">htmlpoems</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Read
            </NavItem>
            <NavItem eventKey={3} href="#">
              Search
            </NavItem>
            <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Submit</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Contact Us</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>htmlpoems.com</h1>
              <p>There is Rhythm in Code</p>
            </div>
          </div>
        </div>
      </div>
    );
  
  }
}

export default App;
