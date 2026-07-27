import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <div id="Home" className="bg-[#0b1320] text-white w-full">
      {/* Top Navigation */}
      <nav className="flex flex-wrap justify-between items-center px-6 py-4 fixed top-0 right-0 left-0">
        <span className="font-bold text-3xl md:text-5xl">Portfolio</span>

        <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 mt-4 md:mt-0 font-semibold">

          <Link to="/">
            <li className="bg-black rounded-xl px-3 py-1 hover:text-blue-400 text-base md:text-xl transition">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="bg-black rounded-xl px-3 py-1 hover:text-blue-400 text-base md:text-xl transition">
              About
            </li>
          </Link>

          <Link to="/project">
            <li className="bg-black rounded-xl px-3 py-1 hover:text-blue-400 text-base md:text-xl transition">
              Projects
            </li>
          </Link>

          <Link to="/skills">
            <li className="bg-black rounded-xl px-3 py-1 hover:text-blue-400 text-base md:text-xl transition">
              Skills
            </li>
          </Link>

          <Link to="/contact">
            <li className="bg-black rounded-xl px-3 py-1 hover:text-blue-400 text-base md:text-xl transition">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
