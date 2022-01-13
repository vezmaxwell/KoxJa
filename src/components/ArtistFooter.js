import React from 'react'

import instagram from '../images/icons/instagram.png'
import email from '../images/icons/envelope.png'

import '../styles/components/_artistFooter.scss'  

const ArtistFooter = () => {

  return (
    <div className="artistFooter">
      <img src={instagram} alt="ig" className="instagram-logo"/>
      <img src={email} alt="mail" className="email-logo" />
    </div>
  )
}

export default ArtistFooter