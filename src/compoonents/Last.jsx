import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Last = () => {
  return (
    <footer className='bg-gray-700 text-white px-6 py-8'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-10'>

        
        <div className='space-y-3 max-w-md'>
          <h1 className='text-3xl underline'>Portfolio</h1>
          <p className='text-lg'>
            A showcase of my work, skills, and professional <br /> journey as a web Developer.
          </p>
        </div>

      
        <div className='space-y-3'>
          <h1 className='text-3xl underline'>Quick Links</h1>
          <ul className='space-y-2'>
            <li>
              <a href="#Home" className='text-2xl hover:text-blue-400'>Home</a>
            </li>
            <li>
              <a href="#About" className='text-2xl hover:text-blue-400'>About</a>
            </li>
            <li>
              <a href="#contact" className='text-2xl hover:text-blue-400'>Contact</a>
            </li>
            <li>
              <a href="#projects" className='text-2xl hover:text-blue-400'>Projects</a>
            </li>
          </ul>
        </div>

        
        <div className='space-y-3'>
          <h2 className='text-3xl font-bold underline'>Contact me</h2>
          <div className='space-y-4'>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>aniketghosh0606@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+91 7501559792</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Last;
