import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Careers.css";

function Careers() {
  const positions = [
    "AI Engineer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Research Intern",
    "Software Intern",
    "UI/UX Intern",
  ];

  return (
    <>
      <Navbar />

      <section className="careers-page">
        <h1 className="careers-title">Join Our Team</h1>
        <p className="careers-subtitle">
          We're looking for passionate builders, thinkers, and collaborators. Explore our open roles below.
        </p>

        <div className="careers-grid">
          {positions.map((role, index) => (
            <div key={index} className="career-card">
              <h3>{role}</h3>
              <p>Temporary position · Remote-friendly · Flexible hours</p>
              <button className="apply-btn">Easy Apply</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Careers;
