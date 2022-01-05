import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="navbar">

{/* Only display imgs when on mobile device */}
{/* These divs need to sit on top of each other without interfering with each other */}

      <div className="navbar-desktop">

        <Link to="#">
          <img src="" alt="koxja logo" />
        </Link>

        <Link to="#">
          <img src="" alt="instagram logo" />
        </Link>

      </div>


      <div className="navbar-mobile">
        <Link to="#">
          <li className="gallery">Gallery</li>
        </Link>

        <Link to="#">
          <li className="artists">Artists</li>
        </Link>

        <Link to="#">
          <li className="contacts">Contacts</li>
        </Link>
      </div>

    </div>
  )

}

export default Navbar