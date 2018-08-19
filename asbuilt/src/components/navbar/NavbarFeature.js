import React, { Component } from 'react';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';

class NavbarFeature extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">AsBuilt</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  About
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavbarFeature;