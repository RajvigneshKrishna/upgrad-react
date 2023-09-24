import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import CartLogo from '../../assets/images/cart-96.png';
import SearchLogo from '../../assets/images/search-48.png';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginLogout = () => {
      setIsLoggedIn(prev => !prev);
    }

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
        <a href="/">Home</a>
        <a href="/add-product">Add Product</a>
        <button className={isLoggedIn ? 'logout-btn' : 'login-btn'} onClick={handleLoginLogout}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
