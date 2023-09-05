import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "../Styles/Header.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="w-100 d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-dark contact-info" />
            <Link to="/" className="navbar-sm-brand text-dark text-decoration-none contact-info">
              info@company.com
            </Link>
            <FontAwesomeIcon icon={faPhone} className="contact-info text-dark" />
            <Link to="/" className="navbar-sm-brand text-dark text-decoration-none contact-info">
              010-020-8340
            </Link>
          </div>
          <div>
            Free delivery on order over PKR 25,000/-
            {/* <Link to="/" className="text-dark"><FontAwesomeIcon icon={faInstagram} className="me-2" /></Link>
            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faLinkedin} className="me-2" /></Link>
            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faTwitter} className="me-2" /></Link> */}
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
