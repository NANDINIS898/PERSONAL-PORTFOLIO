import React from "react";
import profilePic from "./profile.jpeg";
import profile2 from "./alternate.jpeg";
import voxifyImage from "./voxify.png";
import budgetImage from "./budget-tracker.png";

import "./App.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const projects = [
  {
    name: "Movie Mate",
    description: "A movie recommendation app with genre and mood-based playlists.",
    link: "https://github.com/NANDINIS898/movie-mate",
    video: "/final file.mp4",
    techStack: ["React.js", "Node.js", "TMDB API", "MySQL"]
  },
  {
    name: "budget-tracker-app",
    description: "A Python + Tkinter Expenses tracker app with CSV Files and pie charts.",
    link: "https://github.com/NANDINIS898/budget-tracker-app",
    image: budgetImage,
    techStack: ["Python","Pandas", "Numpy" ,"Tkinter", "Matplotlib", "CSV"]
  },
  {
    name: "Voxify",
    description: "Text to voice converter with high-quality voice synthesis.",
    link: "https://github.com/NANDINIS898/text-to-speech",
    live_demo: "https://nandinis898.github.io/VOXIFY/",
    image: voxifyImage, // Place this image inside /public folder
     techStack: ["HTML", "CSS", "JavaScript"]
  }
];

const achievements = [
  "🥉 Secured 3rd Place in IIT Delhi TRYST'25 MAPPLS Hackathon (Team of 4)",
  "🏅 3rd Runner-up at ABESIT Hacknovate 6.0 – Prize pool of $300 by Agent.AI",
  "🏆 Special Mention at DTU CodeWithDCG Hackathon (Team of 4)",
];

const experience = [
  {
    title: "Frontend Developer Intern",
    organization: "Ceeras IT Services",
    duration: "Feb 15, 2025 – July 15, 2025",
    description: "Worked on building professional UIs using ReactJS and modern CSS from Figma designs for production-level web apps.",
  },
  {
    title: "Executive Head",
    organization: "E-Cell MSIT",
    duration: "Ongoing",
    description: "Leading entrepreneurial initiatives, organizing speaker sessions, and managing cross-functional student teams.",
  },
  {
    title: "Public Relations Representative",
    organization: "IEEE MSIT",
    duration: "Ongoing",
    description: "Handled PR responsibilities for IEEE events, increasing visibility and outreach across campus communities.",
  },
];

const contactLinks = {
  linkedin: "https://www.linkedin.com/in/nandini-gangwar-b47987213/",
  github: "https://github.com/nandinis898",
  instagram: "https://www.instagram.com/nandiiinigangwar/"
};

function App() {
  return (
    <div className="container">
      <header className="header">
        {/* Flip Card for Profile Picture */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={profilePic}
                alt="Nandini Gangwar"
                className="profileImage"
              />
            </div>
            <div className="flip-card-back">
              <img
                src={profile2}
                alt="Alternate Back"
                className="profileImage"
              />
            </div>
          </div>
        </div>

        <h1 className="name">Hi, I'm Nandini Gangwar</h1>
        <p className="subtitle">
          Third year Btech ECE student | GenAI Solutions Architect | Cloud Explorer
        </p>
        <h3 className="cgpa">
          Cummalative CGPA: <span className="zoomEffect">9</span>
        </h3>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer focused on building impactful projects
          using React, Node.js, AI, and Cloud technologies. Currently exploring
          Generative AI and Kubernetes.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projectCards">
          {projects.map((project) => (
            <div key={project.name} className="projectCard">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {/* Render image if available */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="projectImage"
                />
              )}

              {/* Render video if it's an MP4 */}
              {project.video && project.video.endsWith(".mp4") && (
                <video className="projectVideo" controls width="100%">
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="projectLinks">
                <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                {project.live_demo && (
                  <a
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              {project.techStack && (
  <div className="techStack">
    <strong>Tech Stack Used:</strong>
    <ul>
      {project.techStack.map((tech, idx) => (
        <li key={idx}>{tech}</li>
      ))}
    </ul>
  </div>
)}
            </div>
           ))}
        </div>
      </section>

      <section className="section">
        <h2>Achievements & Certifications</h2>
        <ul className="achievementList">
          {achievements.map((item, index) => (
            <li key={index} className="achievementItem">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="experienceList">
          {experience.map((item, index) => (
            <div key={index} className="experienceCard">
              <h3>
                {item.title} – <span className="org">{item.organization}</span>
              </h3>
              <p className="duration">{item.duration}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <div className="iconRow">
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contactIcon" />
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="contactIcon" />
          </a>
          <a
            href={contactLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="contactIcon" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
