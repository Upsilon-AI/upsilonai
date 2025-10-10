import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Careers.css";

function Careers() {
  const positions = [
    {
      title: "AI Research Intern",
      description: "LLMs, Symbolic AI, Scientific ML",
    },
    {
      title: "Software Engineer Intern",
      description: "Python, TypeScript, ML Ops",
    },
    {
      title: "Product Prototyper",
      description: "Full-stack, UX, AI agents",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="careers-page">
        <h1 className="careers-title">Upsilon AI is Hiring</h1>
        <p className="careers-subtitle">
          We're looking for passionate builders, thinkers, and collaborators. Explore our open roles below.
        </p>

        <div className="careers-grid">
          {positions.map((role, index) => (
            <div key={index} className="career-card">
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <p>Remote or hybrid · Flexible hours</p>
              <button className="apply-btn">Easy Apply</button>
            </div>
          ))}
        </div>

        <div className="application-info">
          <h3>How to Apply</h3>
          <p>
            Send your GitHub, resume, or demo to{" "}
            <a href="mailto:nagarjun@upsilonai.co">nagarjun@upsilonai.co</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Careers;
