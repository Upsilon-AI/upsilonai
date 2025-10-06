import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import "../styles/ServiceCard.css";

function Services() {
  const services = [
    {
      title: "Software & Web Development",
      description:
        "Custom software solutions and modern web applications built for scalability, performance, and usability.",
    },
    {
      title: "Electronics & Embedded Systems",
      description:
        "Design and prototyping of electronic circuits, IoT devices, and embedded systems for real-world applications.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Develop intelligent systems using deep learning, natural language processing, and predictive analytics.",
    },
    {
      title: "Data Science / IoT / Cybersecurity",
      description:
        "Harness data pipelines, IoT integrations, and robust cybersecurity frameworks to drive insights and protect assets.",
    },
    {
      title: "Mechanical / Civil Prototyping",
      description:
        "Rapid prototyping and testing of mechanical or civil engineering concepts, bridging design to real-world implementation.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Services Page Layout */}
      <section className="services-page">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          We provide end-to-end technical expertise across software, hardware,
          and applied sciences. From building scalable applications to
          prototyping physical systems, our services are designed to empower
          innovation and accelerate research.
        </p>

        <div className="services-tags">
          <span>Request services</span>
          <span>Remote</span>
          <span>Contact for pricing</span>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Services;
