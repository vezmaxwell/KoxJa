import React, { useState } from 'react'
import { Link } from 'react-router-dom'


// Images
import Logo from '../images/homepage/logo.png'

// Styles
import '../styles/components/_navbar.scss'  



const Navbar = () => {

  const [gallery, setGallery] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

  // const select = (event) => {
  //   try {
  //     event.preventDefault()
  //     setGallery(true)
  //     console.log("You selected an item")
  //   } catch (error) {
  //     console.log("This didn't work")
  //   }
  // }

  const select = (event) => {
    try {
      if (event.target.id === "gallery") {
        setGallery(true)
        setAbout(false)
        setContact(false)
      } else if (event.target.id === "about") {
        setAbout(true)
        setGallery(false)
        setContact(false)
      } else {
        setContact(true)
        setAbout(false)
        setGallery(false)
      }
    } catch (error) {
      console.log("Oops, that didn't work!")
    }
  }

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
          <li className={gallery ? "selected" : ""} onClick={select} id="gallery">Gallery</li>
        </Link>

        <Link to="/about">
          <li className={about ? "selected" : ""} onClick={select} id="about">About</li>
        </Link>

        <Link to="/contact">
          <li className={contact ? "selected" : ""} onClick={select} id="contact">Contact</li>
        </Link>
      </div>



    </div>
  )

}

export default Navbar