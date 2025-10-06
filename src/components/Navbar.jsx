import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/upsilonai.jpeg" alt="Upsilon AI Logo" className="navbar-logo" />
        <span className="navbar-brand-text">UpsilonAI</span>
      </div>

      <button
        className="navbar-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <div className={`navbar-links ${mobileOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>

        <div
          className="navbar-dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            className="navbar-dropdown-toggle"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            About
          </button>

          {(aboutOpen || mobileDropdownOpen) && (
            <div className="navbar-dropdown-menu">
              <HashLink smooth to="/about#who-we-are">Who We Are</HashLink>
              <HashLink smooth to="/about#our-team">Our Team</HashLink>
              <HashLink smooth to="/about#achievements">Achievements</HashLink>
              <HashLink smooth to="/about#university-collabs">University Collaborations</HashLink>
            </div>
          )}
        </div>

        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/universities">Universities</Link>
        <Link to="/students">Students</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
