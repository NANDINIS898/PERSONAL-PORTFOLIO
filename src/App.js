import React from "react";
import profilePic from "./profile.jpg";  // <-- put your picture here and update the path if needed

const projects = [
  {
    name: "Movie Mate",
    description: "A movie recommendation app with genre and mood-based playlists.",
    link: "https://github.com/yourusername/movie-mate",
  },
  {
    name: "EventEase (In Progress)",
    description: "AI-driven college event planner to simplify event management.",
    link: "https://github.com/yourusername/eventease",
  },
  {
    name: "Voxify",
    description: "Text to voice converter with high-quality voice synthesis.",
    link: "https://github.com/yourusername/voxify",
  },
];

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={profilePic} alt="Your Name" style={styles.profileImage} />
        <h1>Hey, I'm Your Name</h1>
        <p>Software Developer | AI Enthusiast | Cloud Explorer</p>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          I'm a passionate developer focused on building impactful projects using
          React, Node.js, AI, and Cloud technologies. Currently exploring
          generative AI and Kubernetes.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul style={styles.projectList}>
          {projects.map((project) => (
            <li key={project.name} style={styles.projectItem}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project on GitHub
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    lineHeight: 1.6,
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%", // makes the image circular
    objectFit: "cover",
    marginBottom: "15px",
    border: "3px solid #4CAF50",
  },
  section: {
    marginBottom: "40px",
  },
  projectList: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  projectItem: {
    marginBottom: "20px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
  },
};

export default App;

