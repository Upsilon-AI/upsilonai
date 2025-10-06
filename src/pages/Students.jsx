import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Students.css";

function Students() {
  const faqs = [
    {
      question: "How are final year projects supported?",
      answer:
        "We offer mentorship, technical guidance, and modular templates for documentation, deployment, and presentation.",
    },
    {
      question: "What kind of hackathon support is provided?",
      answer:
        "We help with idea validation, rapid prototyping, pitch decks, and API integration strategies.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing depends on scope, timeline, and team size. We offer student discounts and flexible packages.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="students-page">
        <h2 className="students-title">Students’ Corner</h2>
        <p className="students-subtitle">
          Explore roadmaps, FAQs, and get guidance for your final year projects.
        </p>

        {/* Roadmap Section */}
        <div className="roadmap-section">
          <img
            src="/download (4).jpeg"
            alt="Roadmap"
            className="roadmap-img"
          />
          <div className="roadmap-text">
            <h3>Project Roadmaps</h3>
            <p>
              Whether you're building a final year project or preparing for a hackathon, our roadmap guides help you plan milestones, allocate resources, and track progress.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>FAQs</h3>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Signup Form */}
        <div className="form-section">
          <h3>Request a Consultation</h3>
          <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="University / Institution" />
            <textarea placeholder="Project idea or area of interest" rows="4" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Students;
