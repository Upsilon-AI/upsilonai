import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Universities.css"; // Optional: if you're using a dedicated CSS file

function Universities() {
  return (
    <>
      <Navbar />

      

      <main className="universities-page max-w-5xl mx-auto px-6 py-10">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">For Universities</h2>
          <p className="text-lg text-gray-700">
            We collaborate with academic institutions to drive innovation, support student growth, and co-develop impactful research.
          </p>
        </header>

        {/* Academic Innovation & Research Support */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Academic Innovation & Research Support</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Joint Research:</strong> AI for scientific discovery in biotech, materials, and finance.</li>
            <li><strong>Workshops:</strong> Faculty-led sessions on LLMs, embeddings, and custom AI pipelines.</li>
            <li><strong>Publications:</strong> Co-authored papers and open-source contributions.</li>
          </ul>
        </section>

        {/* Internship & Capstone Collaborations */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Internship & Capstone Project Collaborations</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Capstone Mentorship:</strong> Semester-long guidance with real-world AI deployments.</li>
            <li><strong>Internships:</strong> Remote and hybrid roles in backend, data science, and UX research.</li>
            <li><strong>Student Access:</strong> Proprietary datasets and engineering mentorship.</li>
          </ul>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Why Partner With Us</h3>
          <div className="partner-visual">
            <img
              src="/download (4).jpeg"
              alt="University collaboration visual"
              className="rounded-lg shadow-md"
            />
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Proven Track Record:</strong> Hackathons, startup incubation, and technical awards.</li>
              <li><strong>Tailored Solutions:</strong> Custom AI pipelines for academic and industry needs.</li>
              <li><strong>Student Empowerment:</strong> Focus on accessibility, reproducibility, and mentorship.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Universities;
