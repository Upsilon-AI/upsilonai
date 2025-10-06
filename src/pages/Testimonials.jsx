import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Dr Tan",
    university: "University of Singapore",
    quote:
      "UpsilonAI’s modular AI tools transformed our research pipeline. Their precision and clarity are unmatched.",
  },
  {
    name: "Dr Lee",
    university: "University of A",
    quote:
      "Their embedded systems support helped our students build real-world prototypes with confidence and speed.",
  },
  {
    name: "Dr Wee",
    university: "University of B",
    quote:
      "The cybersecurity modules were not only robust but also intuitive. Our teams deployed safer, faster.",
  },
  {
    name: "Dr Chee",
    university: "University of B",
    quote:
      "From data pipelines to UI/UX, UpsilonAI’s teaching artifacts elevated our curriculum to industry standards.",
  },
];

function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="testimonials-page">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-subtitle">
          Hear from professors, students, and university partners about our impact.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-box ${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="testimonial-info">
                <img
                  src="/upsilonai.jpeg"
                  alt={`${t.name}`}
                  className="testimonial-img"
                />
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.university}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <p>{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Testimonials;
