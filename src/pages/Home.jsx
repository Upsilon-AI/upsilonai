import "../styles/HomeLayout.css"; // Custom layout styles
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Card from "../components/Card";
import { AnimatedSection, Stagger, Item } from "../components/Motion";


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
          <AnimatedSection
            type="slide-up"
            amount={0.6}
            once
            className="video-overlay"
          >
            <h1 className="video-title">Upsilon AI</h1>
          </AnimatedSection>
        </section>

        {/* Hero Section (reveal on scroll) */}
        <AnimatedSection type="fade" amount={0.3} once>
          <HeroSection />
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection
          type="slide-up"
          amount={0.25}
          once
          className="page-container why-choose-us"
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-text">
            We connect students, universities, and industry partners to build
            real-world academic projects that foster innovation, leadership,
            and community impact.
          </p>
        </AnimatedSection>

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
          <AnimatedSection
            type="slide-up"
            amount={0.5}
            once
            className="video-overlay"
          >
            <h2 className="video-title">Real Projects. Real Impact.</h2>
          </AnimatedSection>
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
