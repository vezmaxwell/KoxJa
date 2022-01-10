import React from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from '../images/homepage/logo.png'
import Instagram from '../images/icons/instagram.png'

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

        <Link to="https://www.instagram.com/koxja_tattoo/?hl=en" target="_blank">
          <img src={Instagram} alt="instagram logo" />
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

{/* Display this only on the artists page */}
      <div className="navbar navbar-artists">
            
        <Link to="/katy">
          <li className="navbar-katy">Katy</li>
        </Link>

        <Link to="/jodie">
          <li className="navbar-jodie">Jodie</li>
        </Link>

      </div>

    </div>
  )

}

export default Navbar