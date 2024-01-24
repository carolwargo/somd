import React from "react";
import CoverResize from "../../assets/images/CoverResize.png";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { SiGooglehome } from "react-icons/si";

import "./header.css"

const Header = () => {
  return (
    <header>
     <Navbar bg="light" expand="lg" className="navbar px-1">
        <Navbar.Brand className='nav-brand' href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto align-items-center">
            <Nav.Link href="/" className="nav-home-link">H<span><SiGooglehome  className="nav-home-link-span" /></span>ME</Nav.Link>
            <NavDropdown title="About" id="navbarDropdownMenuLink" className='nav-about-dropdown'>
              <NavDropdown.Item href="/">Who We Are</NavDropdown.Item>
              <NavDropdown.Item href="/">Our Values</NavDropdown.Item>
              <NavDropdown.Item href="/">Reviews</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Events" id="navbarDropdownMenuLink" className='nav-camp-dropdown'>
            <NavDropdown.Item href="/">General Info</NavDropdown.Item>
              <NavDropdown.Item href="/">Showcase Registration</NavDropdown.Item>
              <NavDropdown.Item href="/">Camp Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Success" id="navbarDropdownMenuLink" className='camp-dropdown'>
            <NavDropdown.Item href="/">Players Drafted</NavDropdown.Item>
              <NavDropdown.Item href="/">Players Signed</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Exposure" id="navbarDropdownMenuLink" className='camp-dropdown'>
            <NavDropdown.Item href="/">Guest Speakers</NavDropdown.Item>
              <NavDropdown.Item href="/">Coaching Staff</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/" className="nav-link-contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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
          <p>Click the "Register" button below to sign up for the somdbaseball's exclusive "2024 Summer Showcase".</p>
          <br></br>
          <Link to="/graphic-design">
          <button type="button" className="btn btn-outline-warning">Register Now</button>
          </Link>
          </div>
       
        </div>
      </div>
    </header>
  );
};

export default Header;
