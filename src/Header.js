import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title"><a href="/">Welcome to Our Digital Marketing Services</a></h1>
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/aboutus">About Us</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
