'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Value from './Value/Value'
import Contact from './Contact/Contact'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  
  useEffect(() => {
    const initAOS = async() => {
      await import('aos')
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:"top-bottom",
      })
    }
    initAOS()
  })

  return (
    <div id='home' className="scroll-mt-20 overflow-hidden">
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Experience/>
        <Value/>
        <Contact />
    </div>
  )
}

export default Home