import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Testimonial />
    </>
  )
}

export default App
