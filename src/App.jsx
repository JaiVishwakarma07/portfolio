import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Parallax from '../components/parallax/Parallax'
import Services from '../components/services/Services'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'

function App() {

  return (
    <div>
      <section id='HomePage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'> <Parallax type="services" /> </section>
      <section ><Services /></section>
      <section id='Portfolio'><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id='Contact'> <Contact /> </section>
    </div>
  )
}

export default App
