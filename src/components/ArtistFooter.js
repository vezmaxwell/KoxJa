import React from 'react'

import instagram from '../images/icons/instagram.png'
import email from '../images/icons/envelope.png'

const ArtistFooter = () => {

  return (
    <div className="artistFooter">
      <img src={instagram} alt="ig" className="instagram"/>
      <img src={email} alt="mail" className="email" />
    </div>
  )
}

export default ArtistFooter