import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'



function App() {
  
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />}/>
      </Routes>


    </Router>
  )
}

export default App
