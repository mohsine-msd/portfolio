import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './sections/Nav'
import About from './sections/About'
import Tech from './sections/Tech'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import { Toaster } from 'react-hot-toast'
import Experience from './sections/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster position='top-right'/>
  <Nav />
  <About />
  <Experience />
  <Tech />
  <Projects />
  <Hero />
  <Contact />
    </>
  )
}

export default App
