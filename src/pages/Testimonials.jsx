import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Testimonials.css";

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
          <div className="testimonial-box left">
            <div className="testimonial-info">
              <img
                src="/prof sajid.jpeg"
                alt="Prof. Muhammad Sajid"
                className="testimonial-img"
              />
              <div>
                <h3>Prof. Muhammad Sajid</h3>
                <p>
                  Assistant Professor, Birla Institute of Technology & Science, Pilani Hyderabad Campus<br />
                  Department of Economics and Finance
                </p>
              </div>
            </div>
            <div className="testimonial-quote">
              <p>
                “I have reviewed their recent system for automated ESG and policy integrity analysis, and find it to be a technically robust and promising solution. The system leverages large language models to streamline compliance and sustainability documentation, with potential applications across academic, institutional, and regulatory settings. Throughout our collaboration, Upsilon AI has demonstrated strong execution, clear understanding of domain challenges, and an ability to deliver functional, high-impact tools. I endorse Upsilon AI's continued development and welcome future discussions around research collaboration, deployment, or institutional adoption.”
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Testimonials;
