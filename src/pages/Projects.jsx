import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import "../styles/ProjectCard.css";

function Projects() {
  const projects = [
    {
      title: "Institutional Claims",
      domain: "Dashboard for verifying reliability of research papers",
      image: "/project.png",
      link: "#",
    },
    {
      title: "AI Chatbot",
      domain: "Friendly chatbot system for conversational AI",
      image: "/project.png",
      link: "#",
    },
    {
      title: "Website A",
      domain: "Corporate website for Company A",
      image: "/project.png",
      link: "#",
    },
    {
      title: "Commet",
      domain: "Harnessing AI pipelines for scalable deployment",
      image: "/project.png",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Projects;
