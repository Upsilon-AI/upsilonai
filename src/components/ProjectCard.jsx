function ProjectCard({ title, domain, image, link }) {
  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
      <div
        className="project-details"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p>{domain}</p>
        <a href={link} className="demo-btn" target="_blank" rel="noopener noreferrer">
          View Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
