import React, { Component } from 'react';
import './App.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    }
  }

  componentDidMount() {
    console.log('mounted');
  }

  handleChange(selectedOption) {
    this.setState({ 
      selectedOption :
      selectedOption ? selectedOption : ''
    });
    // selectedOption can be null when the `x` (close) button is clicked
    /* if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    } */
  }

  render() {

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
            <Select
              name="form-field-name"
              value={this.state.selectedOption.value}
              onChange={this.handleChange.bind(this)}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
          </div>
        </div>
      </div>
    );
  
  }
}

export default App;
