import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Blog.css"; // Import the dedicated CSS file

function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with LLMs in Research",
      category: "AI",
      date: "Oct 2025",
      summary: "A beginner-friendly guide to integrating large language models into academic workflows.",
      image: "/download (4).jpeg",
    },
    {
      title: "Design Systems for Scientific Web Apps",
      category: "Web",
      date: "Sep 2025",
      summary: "Semantic JSX, scalable tokens, and accessibility-first UI for research platforms.",
      image: "/download (4).jpeg",
    },
    {
      title: "Rapid Prototyping with Embedded Systems",
      category: "Hardware",
      date: "Aug 2025",
      summary: "Tips for building IoT prototypes and firmware for field deployment.",
      image: "/download (4).jpeg",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="blog-page">
        <h2>Resources & Blog</h2>
        <p>
          Publish-ready guides, insights, and trends in AI, Web, Hardware, and academic tech domains.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <div key={i} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="content">
                <span className="category">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="date">{post.date}</p>
                <p className="summary">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
