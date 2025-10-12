import "../styles/Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Contact Info */}
        <div className="footer-contact">
          <p>
            Email: <a href="mailto:aryan@upsilonai.co">aryan@upsilonai.co</a>
          </p>
          <p>
            Phone: <a href="tel:+6598515567">+65 9851 5567</a>
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="footer-center">
          <p>© 2025 Upsilon AI. All rights reserved.</p>
        </div>

        {/* Right: Social Links */}
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/upsilon-ai/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a href="#">
            <FaTwitter className="social-icon" /> Twitter
          </a>
          <a href="#">
            <FaInstagram className="social-icon" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
