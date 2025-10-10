import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Upsilon AI. All rights reserved.</p>

      <div className="footer-contact">
        <p>Email: <a href="mailto:aryan@upsilonai.co">aryan@upsilonai.co</a></p>
        <p>Phone: <a href="tel:+6598515567">+65 9851 5567</a></p>
      </div>

      <div className="footer-links">
        <a href="https://www.linkedin.com/company/upsilon-ai/about/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
