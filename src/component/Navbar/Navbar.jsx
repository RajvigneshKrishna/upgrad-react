import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import CartLogo from '../../assets/images/cart-96.png';
import SearchLogo from '../../assets/images/search-48.png';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(true);
    const [showHomeLink, setShowHomeLink] = useState(true);
    const [showAddProductLink, setShowAddProductLink] = useState(true);
  
    const handleLoginLogout = () => {
      setIsLoggedIn(prev => !prev);
      setShowSearch(!isLoggedIn); 
      setShowHomeLink(!isLoggedIn); 
      setShowAddProductLink(!isLoggedIn); 
    }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={CartLogo} alt="Cart Logo" />
        <span className="shop-name">upGrad E-Shop</span>
      </div>
      {showSearch && (
      <div className="search-bar">
        <span className="search-icon">
          <img src={SearchLogo} alt="Search Icon" />
        </span>
        <input type="text" placeholder="Search..." />
      </div>
      )}
      <div className="links">
      {showHomeLink && <Link to="/">Home</Link>}
      {showAddProductLink && <Link to="/add-product">Add Product</Link>}
        {isLoggedIn ? (
          <Link to="/signup" className='login-btn'>SignUp</Link>
        ) : (
          <Link to="/login" className='login-btn'  onClick={handleLoginLogout}  >Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
