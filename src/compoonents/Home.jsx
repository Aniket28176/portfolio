import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 px-6 md:px-20 py-10 mt-1">
        {/* Profile Image */}
        <img
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover transform transition-transform duration-500 hover:scale-110 bg-blue-500 p-1 mt-30"
          src="aniket5.jpg"
          alt="Aniket Ghosh"
        />

        {/* Text Content */}
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left max-w-xl mt-30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 font-bold typewriter mx-7">
            Aniket Ghosh
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
            Hello, <br />
            I am a passionate{" "}
            <b className="text-yellow-300">Full Stack Web Developer</b> with
            hands-on experience in building modern, responsive, and scalable web
            applications. My expertise spans both front-end and back-end
            technologies, and I thrive in turning complex problems into elegant
            solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Aniket28176"
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

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <Link to="/project">
            <button className="bg-blue-600 hover:bg-black text-white rounded-2xl px-5 py-2 transition-transform duration-300 hover:scale-105">
              View Projects
            </button>
            </Link>

            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-black text-white rounded-2xl px-5 py-2 transition-transform duration-300 hover:scale-105">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;