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

        <Link to="/about">
          <li className="artists">About</li>
        </Link>

        <Link to="#">
          <li className="contacts">Contacts</li>
        </Link>
      </div>

{/* Display this only on the artists page */}
      <div className="navbar-artists">
            
        <Link to="#">
          <li className="navbar-katy">Katy</li>
        </Link>

        <Link to="#">
          <li className="navbar-jodie">Contacts</li>
        </Link>

      </div>

    </div>
  )

}

export default Navbar