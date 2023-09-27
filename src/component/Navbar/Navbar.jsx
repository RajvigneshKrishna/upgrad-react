// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import CartLogo from '../../assets/images/cart-96.png';
import SearchLogo from '../../assets/images/search-48.png';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="logo">
        <img src={CartLogo} alt="Cart Logo" />
        <span className="shop-name">upGrad E-Shop</span>
      </div>
      <div className="search-bar">
        <span className="search-icon">
          <img src={SearchLogo} alt="Search Icon" />
        </span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/login" className='login-btn'>Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
