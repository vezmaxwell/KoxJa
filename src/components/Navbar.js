import React from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from '../images/homepage/logo.png'

// Styles
import '../styles/components/_navbar.scss'  



const Navbar = () => {

  return (
    <div className="navbar-container">

{/* Only display imgs when on mobile device */}
{/* These divs need to sit on top of each other without interfering with each other */}

      <div className="navbar navbar-desktop">

        <Link to="/">
          <img src={Logo} alt="koxja logo" className="navbar-logo"/>
        </Link>

      </div>


      <div className="navbar navbar-mobile">
        <Link to="/gallery">
          <li className="gallery">Gallery</li>
        </Link>

        <Link to="/about">
          <li className="artists">About</li>
        </Link>

        <Link to="/contact">
          <li className="contact">Contact</li>
        </Link>
      </div>



    </div>
  )

}

export default Navbar