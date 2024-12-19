import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/assets/nt-logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="/products" className="nav-item">
          PRODUCTS
        </Link>
        <Link to="/about" className="nav-item">
          ABOUT
        </Link>
        <Link to="/contact" className="nav-item">
          CONTACT
        </Link>
      </nav>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
