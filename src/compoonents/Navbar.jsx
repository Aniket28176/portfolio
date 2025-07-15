import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <div id="Home" className="bg-[#0b1320] text-white">
    
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-20 py-4">
        <span className="font-bold text-3xl md:text-5xl">Portfolio</span>
        <ul className="flex flex-wrap gap-3 md:gap-5 mt-4 md:mt-0 font-semibold">
           <a href ="#About">
            <li className=' bg-black rounded-xl px-2 hover:text-blue-400 text-sm text-xl'>About</li>
            </a>

            <a href ="#Experience">
            <li className=' bg-black rounded-xl px-2 hover:text-blue-400 text-sm text-xl'>Experience</li>
            </a>
            <a href ="#projects">
            <li className=' bg-black rounded-xl px-2 hover:text-blue-400 text-sm text-xl'>projeccts</li>
           </a>

           <a href ="#skills">
            <li className=' bg-black rounded-xl px-2 hover:text-blue-400 text-sm text-xl'>skills</li>
            </a>

            <a href ="#contact">
            <li className=' bg-black rounded-xl px-2 hover:text-blue-400 text-sm text-xl'>contact</li>
          </a>

          
        
        </ul>
      </nav>

      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 px-6 md:px-20 py-10">
  
        <img
          className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-blue-500 p-1"
          src="aniket4.jpg"
          alt="My Image"
        />

        
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-yellow-300">Aniket Ghosh</h1>
          <p className="text-sm md:text-lg">
            Hello, <br />I am a passionate <b className="text-yellow-300">Full Stack Web Developer</b> with hands-on experience in building modern,<br/> 
            responsive, and scalable web applications. My expertise spans both front-end and back-end<br/> 
            technologies, and I thrive in turning complex problems into elegant solutions.
          </p>

        
          <div className="flex justify-center md:justify-start space-x-4">
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

          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
            <button className="bg-blue-600 hover:bg-black text-white rounded-2xl px-4 py-2 transition">
              View Projects
            </button>
            <a href="#contact">
              <button className="bg-blue-600 hover:bg-black text-white rounded-2xl px-4 py-2 transition">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
