import "../styles/HomeLayout.css"; // Custom layout styles
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Video Section with overlay text */}
        <section className="video-section">
          <video
            className="hero-video"
            src="/Scene 01_2.mp4"
            autoPlay
            loop
            playsInline
          />
          <div className="video-overlay" style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
            <h1 className="video-title" style={{ textAlign: "left", marginLeft: 100, marginTop: 150}}>Upsilon AI</h1>
          </div>
        </section>

        {/* Hero Section */}
        <HeroSection />

        {/* Why Choose Us Section */}
        <section className="page-container why-choose-us">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-text">
            We connect students, universities, and industry partners to build
            real-world academic projects that foster innovation, leadership,
            and community impact.
          </p>
        </section>

        {/* Second Video Section */}
        <section className="video-section">
          <video
            className="hero-video"
            src="/Scene 01_2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-overlay">
            <h2 className="video-title">Real Projects. Real Impact.</h2>
          </div>
        </section>

        {/* Testimonials or Visuals */}
        {/* Add a TestimonialsSection or ImageGallery here */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
