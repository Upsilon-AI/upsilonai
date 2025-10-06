import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [location]);

  const teamMembers = [
    {
      name: "Member A",
      role: "AI Engineer",
      bio: "Specializes in LLM integration and backend optimization for scalable AI systems.",
    },
    {
      name: "Member B",
      role: "Data Scientist",
      bio: "Focuses on predictive modeling and data visualization for biotech applications.",
    },
    {
      name: "Member C",
      role: "Embedded Systems Lead",
      bio: "Designs IoT prototypes and firmware for real-world deployment.",
    },
    {
      name: "Member D",
      role: "UX Researcher",
      bio: "Crafts intuitive interfaces and accessibility-first design systems.",
    },
  ];

  const hackathonAwards = [
    ["Best Overall Hack / Grand Prize", "Awarded to the top project across the event."],
    ["Runner-Up / Top 3 Projects", "Recognition for strong contenders."],
    ["Best Startup Potential Award", "Judged on market readiness and scalability."],
    ["Investor’s Choice Award", "Selected by VCs or angel investors attending."],
    ["Best Go-To-Market Strategy", "Clear path from prototype to real-world adoption."],
    ["Best B2B / Enterprise AI Solution", "Targeting businesses effectively."],
    ["Best Student Startup Award", "If your team is mostly students."],
  ];

  const techAwards = [
    ["Best Technical Implementation", "Strongest backend/engineering effort."],
    ["Best UI/UX Award", "Clean, usable, and beautiful design."],
    ["Best Data Science Hack", "Novel use of data analysis or visualization."],
    ["Best Open Source Contribution", "Project contributes to open source."],
    ["Best Integration of APIs / Cloud Tools", "Great use of sponsor tools."],
  ];

  const universities = [
    "National University of Singapore (NUS)",
    "Massachusetts Institute of Technology (MIT)",
    "University of Cambridge",
    "Stanford University",
    "ETH Zurich",
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* Intro */}
      <section>
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We build custom, high-performance AI pipelines for scientific R&D teams in medicine, biotech, finance and materials. Combining LLMs, embeddings, and scientific computing, we supercharge your proprietary workflows — no plug-and-play, just precision-engineered AI.
        </p>
      </section>

      {/* Team */}
      <section id="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-member">
              <img
                src="/download.jpeg"
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements">
        <h2>Our Achievements</h2>
        <h3 className="text-xl font-semibold mb-4">Hackathon Awards</h3>
        <div className="awards-grid">
          {hackathonAwards.map(([title, desc]) => (
            <div className="award-box" key={title}>
              <div className="award-title">{title}</div>
              <div className="award-description">{desc}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Tech & Engineering Awards</h3>
        <div className="awards-grid">
          {techAwards.map(([title, desc]) => (
            <div className="award-box" key={title}>
              <div className="award-title">{title}</div>
              <div className="award-description">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section id="university-collabs">
        <h2>University Collaborations</h2>
        <div className="universities-grid">
          {universities.map((uni, i) => (
            <div
              key={i}
              className="university-card"
              style={{ backgroundImage: "url('/download (4).jpeg')" }}
            >
              <span>{uni}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
