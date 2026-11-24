
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "BagVerse",
    category: "Full Stack Development",
    image: "bagverse.png",
    description:
      "A MERN stack e-commerce platform for shopping bags, featuring user authentication, product browsing, cart management, discounts, checkout, and an admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "",
    live: ""
  },

  {
    title: "ResumeIQ",
    category: "AI-Powered Application",
    image: "resumeiq.png",
    description:
      "An AI-powered resume builder that analyzes job descriptions, user information, and uploaded resumes to generate ATS-friendly resumes.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI API"],
    github: "",
    live: "https://resume-iq-black-seven.vercel.app/login"
  },

  {
    title: "AI Code Reviewer",
    category: "AI & Web Development",
    image: "codeReviewr.png",
    description:
      "An AI-powered application that reviews source code, identifies potential issues, and provides suggestions to improve code quality and readability.",
    technologies: ["React", "Node.js", "Express", "Gemini API"],
    github: "",
    live: ""
  },

  {
    title: "Expense Tracker",
    category: "Full Stack Development",
    image: "expense.png",
    description:
      "An expense management application designed to track income and expenses, organize transactions, and help users monitor their spending.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    live: ""
  },

  {
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    image: "heart.png",
    description:
      "A machine learning project that analyzes patient-related health attributes to predict the likelihood of heart disease using classification algorithms.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    github: "",
    live: ""
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white px-4 sm:px-6 md:px-12 py-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl sm:text-5xl mb-4">
          My <span className="text-purple-400">Projects</span>
        </h1>

        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Some of the projects I've built using modern technologies
          and creative problem-solving.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-purple-500/10 border border-purple-400/20
            rounded-2xl overflow-hidden shadow-lg
            hover:border-purple-400/60 hover:-translate-y-2
            transition-all duration-300"
          >

            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full aspect-video object-contain
                bg-gray-900
                group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <span className="text-purple-400 text-sm font-semibold">
                {project.category}
              </span>

              <h2 className="text-2xl font-bold mt-2 mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm leading-7 min-h-28">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-2 rounded-full
                    bg-purple-500/20 text-purple-300
                    border border-purple-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              {(project.github || project.live) && (
                <div className="flex gap-5 mt-7 pt-5 border-t border-purple-400/20">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm
                      hover:text-purple-400 transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm
                      text-purple-400 hover:text-purple-300
                      transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;

