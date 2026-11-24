
import React from 'react';
import { Github, Linkedin, Mail, Code2, Brain, Globe } from 'lucide-react';

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-16 gap-12 text-white w-full min-h-screen"
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0 flex justify-center  md:-translate-y-6">
        <img
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:-translate-y-3 transition-transform duration-300"
          src="aniket7.jpeg"
          alt="Aniket Ghosh"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-2xl">

        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl underline text-yellow-300">
          About Me
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-blue-400">
          Full Stack Developer | AI/ML Enthusiast
        </h2>

        <p className="text-base sm:text-lg text-gray-100">
          Hi, I'm <span className="text-yellow-300 font-semibold">
            Aniket Ghosh
          </span>, a B.Tech student specializing in Artificial
          Intelligence and Machine Learning.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          I am a passionate developer interested in building scalable
          web applications and intelligent solutions using modern
          technologies. I specialize in the MERN stack, developing
          interactive frontends and robust backend systems with
          real-world functionality.

          <br /><br />

          Alongside web development, I explore Machine Learning,
          working with Python and Scikit-learn to build predictive
          models and data-driven applications. I also enjoy
          strengthening my problem-solving skills through Data
          Structures and Algorithms using Java.

          <br /><br />

          I continuously explore new technologies, work on practical
          projects, and improve my development skills to turn
          innovative ideas into meaningful applications.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            aria-label="GitHub"
          >
            <Github className="text-white" size={24} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-white" size={24} />
          </a>

          <a
            href="mailto:YOUR_EMAIL"
            className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition"
            aria-label="Email"
          >
            <Mail className="text-white" size={24} />
          </a>

        </div>

        {/* Contact Button */}
        <a href="#contact">
          <button className="rounded-2xl bg-blue-600 hover:bg-blue-700 px-7 py-3 text-white text-base sm:text-lg font-medium transition-transform duration-300 hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </a>

      </div>
    </div>
  );
};

export default About;
