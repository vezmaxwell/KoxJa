import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Component Imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Homepage from './components/Homepage'
import Katy from './components/Katy'
import Jodie from './components/Jodie'



function App() {
  
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Homepage />}/>
      </Routes>

      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Routes>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>

      <Routes>
        <Route path="/katy" element={<Katy />}/>
      </Routes>

      <Routes>
        <Route path="/jodie" element={<Jodie />}/>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
