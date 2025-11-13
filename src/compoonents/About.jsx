import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-16 lg:px-24 gap-8 bg-transparent
       w-screen h-screen"
    >
      <div className="flex-shrink-0">
        <img
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:-translate-y-3 transition-transform"
          src="about4.jpg"
          alt="About"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
        <h1 className="font-bold text-4xl md:text-5xl text-white underline">About Me</h1>
        <p className="text-lg md:text-2xl text-white">
          A passionate Web developer with a knack for creative problem-solving.
        </p>
        <p className="text-white">
          I specialize in building full-stack web applications that are not only functional but also deliver
          exceptional user experiences. With a strong foundation in both frontend and backend technologies,
          I bridge the gap between design and functionality.
          <br />
          <br />
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
          or sharing my knowledge with the developer community.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <Github className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
          >
            <Linkedin className="text-white" />
          </a>
        </div>

        <a href="#contact">
          <button className="rounded-2xl bg-blue-500 hover:bg-black px-6 py-3 text-white transition">
            Get In Touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
