import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <h2>SUP</h2>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  )
}

export default App
