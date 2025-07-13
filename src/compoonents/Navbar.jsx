import React from 'react'
import { Github, Linkedin } from 'lucide-react';



const Navbar = () => {

  return (
    <div id='Home'>
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 gap-20'>
        <span className='font-bold text-5xl mx-0'>Portfolio</span>

        <ul className= "mx-24 py-2 font-semibold md:mt-5 px-2 rounded-2xl flex gap-2.5" >
          <a href ="#About">
            <li className=' bg-black rounded-2xl px-2 hover:text-blue-400'>About</li>
            </a>

            <a href ="#Experience">
            <li className=' bg-black rounded-2xl px-2 hover:text-blue-400'>Experience</li>
            </a>
            <a href ="#projects">
            <li className=' bg-black rounded-2xl px-2 hover:text-blue-400'>projeccts</li>
           </a>

           <a href ="#skills">
            <li className=' bg-black rounded-2xl px-2 hover:text-blue-400'>skills</li>
            </a>

            <a href ="#contact">
            <li className=' bg-black rounded-2xl px-2 hover:text-blue-400'>contact</li>
          </a>
        </ul>
    </nav>
    <div className='px-15 py-20 bg-[#0b1320] gap-3 space-x-4 mt-6 align-middle'>
           <img className='rounded-full bg-blue-500 px-1.5' src="aniket4.jpg" alt="My Image" />
           <h1 className='text-6xl text-white text-left'>Aniket Ghosh</h1>
           <p className='text-white text-lg relative -top-60'> Hello, <br/> I am a passionate <b className='text-2xl text-yellow-300'>Full Stack Web Developer</b> with hands-on experience<br/> in building modern, responsive, and scalable web applications.<br/> My expertise spans both front-end and back-end technologies,<br/> and I thrive in turning complex problems into elegant solutions.
          </p>

           <div className="flex space-x-4 mx-160 my-2">
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

           <button className='bg-blue-600 h-10 text-white hover:bg-black relative -top-55 rounded-2xl px-2'>View projects</button>

           <a href ="#contact">
           <button className='bg-blue-600 h-10 text-white hover:bg-black relative -top-55 rounded-2xl px-2'>Get In touch</button>
           </a>
    </div>

  </div>
  );
}

export default Navbar