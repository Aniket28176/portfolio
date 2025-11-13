import { useState } from 'react'
import './App.css'
import Navbar from './compoonents/Navbar'
import Skills from './compoonents/Skills'
import About from './compoonents/About'
import Contact from './compoonents/contact'
import Philosophy from './compoonents/Philosophy'
import Conclusion from './compoonents/conclusion'
import Last from './compoonents/Last'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-blue-950 overflow-hidden min-h-screen min-w-screen'>
    <Navbar/>
    <Skills/>
        <About/>
        <Contact/>
     <Philosophy/>
     <Conclusion/>
    
        <a href ="#contact">
      <button className='rounded-2xl bg-blue-500 hover:bg-black px-7 py-5 my-5 text-white'>Get In Touch</button>
      </a>
     <Last/>
  </div>
  );
} 
export default App