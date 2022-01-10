import React from 'react'

import Logo from '../images/homepage/logo.png'
import Abstract from '../images/homepage/swirls.png'

import '../styles/components/_homepage.scss'  


const Homepage = () => {
  return (
    <div className="homepage-container">
      <img src={Logo} alt="" className="home-logo"/>
      <div className="abstract-box">
        <img src={Abstract} alt="" className="abstract" />
      </div>
      
    </div>
  )
}

export default Homepage