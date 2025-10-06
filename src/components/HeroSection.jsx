import "../styles/HeroSection.css"; // import the dedicated CSS file
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section relative text-center text-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 animate-fadeInUp max-w-4xl mx-auto">
      
        <h1 className="hero-title typing-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Innovating Academic Projects for Future Leaders
        </h1>

        <p className="hero-subtitle text-base sm:text-lg md:text-xl mb-6 text-gray-200">
          Collaborate, Build, and Inspire through Technology
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/projects">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold hover:bg-indigo-100 transition">
              Explore Projects
            </button>
          </Link>

          <Link to="/careers">
            <button className="bg-white text-purple-600 px-6 py-3 rounded font-semibold hover:bg-purple-100 transition">
              Work With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
