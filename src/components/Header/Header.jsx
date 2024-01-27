import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import CoverResize from "../../assets/images/CoverResize.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SiGooglehome } from "react-icons/si";

import "./header.css";

const Header = () => {
  return (
    <header style={{fontFamily:'roboto', fontSize:'12px'}}>
      <Navbar bg="light" expand="lg" className="navbar px-4">
    
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto align-items-center">
            <Nav.Link href="/" className="nav-home-link">
              H
              <span>
                <SiGooglehome className="nav-home-link-span" />
              </span>
              ME
            </Nav.Link>
            <NavDropdown
              title="About"
              id="navbarDropdownMenuLink"
              className="nav-about-dropdown"
            >
              <NavDropdown.Item as={Link} to="/about#who-we-are">Who We Are</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#our-values">Our Values</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#testimonials">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Events"
              id="navbarDropdownMenuLink"
              className="nav-camp-dropdown"
            >
              <NavDropdown.Item href="/">General Info</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Showcase Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Camp Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Success"
              id="navbarDropdownMenuLink"
              className="camp-dropdown"
            >
              <NavDropdown.Item href="/success">Players Drafted</NavDropdown.Item>
              <NavDropdown.Item href="/success">Players Signed</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Exposure"
              id="navbarDropdownMenuLink"
              className="exposure-dropdown"
            >
              <NavDropdown.Item href="/exposure#guest-speakers">Guest Speakers</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#coaching-staff">Coaching Staff</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#colleges">Colleges Represented</NavDropdown.Item>
              <NavDropdown.Item href="/exposure#conference">Conferences Represented</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact" className="nav-link-contact">
              Contact
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
      
        <div className="text-center px-2">
     
        <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#00FF00'  }}>
    <MDBIcon icon='comment' size='lg' />
  </MDBBtn>
        <MDBBtn tag='a' color='none' className='m-2' style={{ color: 'blue' }}>
    <MDBIcon icon='phone' size='lg' />
  </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#3b5998' }}>
        <MDBIcon fab icon='facebook-f' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#dd4b39' }}>
        <MDBIcon fab icon='google' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-2' style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='lg' />
      </MDBBtn>

          </div>
        
      </Navbar>
      <div
        id="intro-example"
        className="p-4 bg-image position-relative"
        style={{
          backgroundImage: `url(${CoverResize})`,
          backgroundSize: "cover", // Set the background size to cover the entire viewport
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Optional: Keep the background fixed while scrolling
        }}
      >
        {/* Overlay div for masking */}

        <div className="row d-flex px-5 text-white text-center position-relative">
          <br></br>
          <div className="p-2" id="header-intro">
            <h1>Southern Maryland Baseball Camp</h1>
            <p>"------------TAGLINE HERE------------"</p>

            <h3>2024 Summer Camp & Showcase</h3>
            <p>
              Click the "Register" button below to sign up for the
              somdbaseball's exclusive "2024 Summer Showcase".
            </p>
            <br></br>
            <Link to="/graphic-design">
              <button type="button" className="btn btn-outline-warning">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        
       
      </div>
    </header>
  );
};

export default Header;
