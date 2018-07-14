import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

library.add(faColumns, faUsers);

class HeaderLinks extends Component {
  /* Top Navbar links */
  render() {
    return (
      <div>
        <Nav>
          <NavItem href="/dashboard" eventKey={2}>
            <FontAwesomeIcon icon="columns" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavItem href="/audience" eventKey={3}>
            <FontAwesomeIcon icon="users" />
            <p className="hidden-lg hidden-md">Audience</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={1}
            title="Account"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Account Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.2}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
