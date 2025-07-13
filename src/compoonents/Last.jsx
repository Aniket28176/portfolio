import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Last = () => {
  return (
    <footer>
    <div className='bg-gray-700 flex min-h-74 space-x-30 mx-3'>
        <div className='space-y-3'>
            <h1 className='text-3xl text-white underline'>Portfolio</h1>
            <p className='text-lg text-white'>A showcase of my work,skills,and professional<br/>
            journey as a web Developer.</p>
        </div>
        <div className='space-y-3'>
            <h1 className='text-3xl text-white underline'>Quick Links</h1>
            <ul className='text-2xl text-white '>

              <a href ="#Home">
                <li className=' hover:text-blue-400'>Home</li>
                </a>

                <a href ="#About">
                <li className=' hover:text-blue-400'>About</li>
                </a>

                <a href ="#contact">
                <li className=' hover:text-blue-400'>Contact</li>
                </a>

                <a href ="#projects">
                <li className=' hover:text-blue-400'>Projects</li>
                </a>
            </ul>
        </div>
        <div>
            <h2 className='text-3xl text-bold text-white underline'>Contact me</h2>
    <div className="bg-gray-700 text-white p-6 space-y-4 w-fit">
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
        <span>Kolkata India</span>
      </div>
    </div>
            
        </div>
    </div>
    </footer>
  )
}

export default Last