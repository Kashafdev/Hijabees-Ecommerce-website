import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="#">Hijabee's</Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className="navbar-icons">
          <div className="nav-icon">
            <Link to="/cart">
              <FaShoppingCart style={{ fontSize: '24px', color: 'white' }} />
            </Link>
          </div>
          <div className="nav-icon">
            <Link to="/wishlist">
              <FaHeart style={{ fontSize: '24px', color: 'white' }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
