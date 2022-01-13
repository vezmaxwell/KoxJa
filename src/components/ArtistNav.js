import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../styles/components/_navbar.scss'  
import '../styles/components/_navbarArtists.scss'  


const ArtistNav = () => {

  const [katy, setKaty] = useState(false)
  const [jodie, setJodie] = useState(false)

  const select = (event) => { 
    try {
      if (event.target.id === "katy") {
        setKaty(true)
        setJodie(false)
      } else if (event.target.id === "jodie") {
        setJodie(true)
        setKaty(false)
      } else {
        setKaty(false)
        setJodie(false)
      }
    } catch (error) {
      
    }
  }

  return (

    <div className="navbar navbar-artists">
      <AnchorLink href="#about-katy">
        <li className={katy ? "selected" : ""} onClick={select} id="katy">Katy</li>
      </AnchorLink>
      <AnchorLink href="#about-jodie">
        <li className={jodie ? "selected" : ""} onClick={select} id="jodie">Jodie</li>
      </AnchorLink>
    </div>
  )
}

export default ArtistNav