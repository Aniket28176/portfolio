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

  return (
    <div className='bg-[#440988] overflow-hidden min-h-screen min-w-screen'>
      <Stairs>
      <Navbar />
        <Home />
        <Skills />
        <About />
        <Contact />
        <Projects />
      <Philosophy/> 
      <Conclusion />
      <Last/>
      </Stairs>
    </div>
  )
}

export default App