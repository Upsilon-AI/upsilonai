import Navbar from "./Navbar";
import Footer from "./Footer";

function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <p>Hear from professors, students, and university partners about our impact.</p>
        {/* Add <Testimonial /> components here */}
      </section>
      <Footer />
    </>
  );
}

export default Testimonials;
