import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './compoonents/Home'
import Navbar from './compoonents/Navbar'
import Skills from './compoonents/Skills'
import About from './compoonents/About'
import Contact from './compoonents/contact'
import Philosophy from './compoonents/Philosophy'
import Conclusion from './compoonents/conclusion'
import Last from './compoonents/Last'
import Projects from './compoonents/Project'
import Stairs from './compoonents/Stairs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-950 overflow-hidden min-h-screen min-w-screen'>
      <Stairs>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Philosophy />
      <Conclusion />
      <Last />
      </Stairs>
    </div>
  )
}

export default App
