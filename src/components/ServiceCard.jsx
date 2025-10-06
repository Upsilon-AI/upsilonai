import "../styles/ServiceCard.css";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
