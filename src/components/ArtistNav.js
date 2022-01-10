import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ArtistNav = () => {
  return (

    <div className="navbar navbar-artists">
      <AnchorLink href="#about-katy">
        <li className="navbar-katy">Katy</li>
      </AnchorLink>
      <AnchorLink href="#about-jodie">
        <li className="navbar-jodie">Jodie</li>
      </AnchorLink>
    </div>
  )
}

export default ArtistNav