import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-12 gap-10 bg-[#0b1320] text-white w-full min-h-screen"
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0 flex justify-center">
        <img
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:-translate-y-3 transition-transform duration-300"
          src="about4.jpg"
          alt="About"
        />
      </div>

      {/* Right Side Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl underline text-yellow-300">
          About Me
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-100">
          A passionate Web Developer with a knack for creative problem-solving.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          I specialize in building full-stack web applications that are both functional and user-friendly.
          With a strong foundation in front-end and back-end technologies, I focus on creating seamless
          digital experiences that blend <b>design</b> with <b>performance</b>.
          <br /><br />
          When I’m not coding, I love exploring new technologies, contributing to open-source projects, or
          sharing my learnings with the developer community.
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
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

        {/* Button */}
        <a href="#contact">
          <button className="rounded-2xl bg-blue-600 hover:bg-black px-6 py-3 text-white text-base sm:text-lg font-medium transition-transform duration-300 hover:scale-105">
            Get In Touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
