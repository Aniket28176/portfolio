import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div id='About' className='flex'>
        <div className=" text-shadow-indigo-100 border-black px-5 py-4 mx-15 my-11 max-w-sm shadow-ig rounded-2xl bg-white p-6 h-148 
hover:-translate-y-3">
  <img className='h-140 w-155' src="about4.jpg" />
</div>
<div className=' min-h-screen mx-12 my-48 gap-10 space-y-10'>
<h1 className='font-bold text-5xl text-white underline top-10'>About Me</h1>
<p className='text-4xl justify-between space-x-7 space-y-7 text-white'>A passionate Web developer with a knack for creative problem-solving.</p>
    <p className='text-center text-white'>I specialize in building full-stack web applications that <br/>are not only functional but also 
    deliver exceptional user experiences. <br/> With a strong foundation in both frontend and backend technologies, <br/>
     I bridge the gap between design and functionality.

When I'm not coding, you can find me exploring new technologies, <br/> contributing to open-source projects, 
or sharing my knowledge with the developer community.</p>

    <div className="flex space-x-4 mx-100">
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
<a href ="#contact">
<button className='rounded-2xl bg-blue-500 hover:bg-black px-7 py-4 text-white'>Get In Touch</button>
</a>
</div>
</div>
  );
}

export default About