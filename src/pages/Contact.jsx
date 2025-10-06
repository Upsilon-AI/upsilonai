import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <div className="glass-card">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Reach out for collaborations, questions, or feedback.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
