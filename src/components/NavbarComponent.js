import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd } from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
              <Container>
              <NavbarBrand href="/"><FontAwesomeIcon  icon={faAd}/> {props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About us</NavLink>
            </NavItem>
           </Nav>
          <NavbarText>Admin</NavbarText>
        </Collapse>
       </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.users.title
  }
}
// const mapStateToProps = state => {
//   return {
//     users: state.users.data
//   }
// }

export default connect(mapStateToProps, null)(NavbarComponent);