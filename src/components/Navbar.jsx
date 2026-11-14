
import { useState } from "react";
import "./Navbar.css";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP
} from "react-icons/fa";

import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Information Bar */}
      <div className="top-bar">
        <p>Good Coffee, Good Mood</p>

        <div className="top-bar-right">
          <p>Mon-Sun: 7:00 AM - 9:00 PM</p>

          <div className="social-media">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>CAFÉ</h2>
          <span>COFFEE & MORE</span>
        </div>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <button className="order-btn" onClick={closeMenu}>
            Order Online
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
