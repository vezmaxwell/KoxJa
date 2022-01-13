import React from 'react'
import { Link } from 'react-router-dom'

// Images
import Instagram from '../images/icons/instagram.png'

// Styles
import '../styles/components/_footer.scss'

const Footer = () => {
  return (
    
    <div className="footer">
      <Link to="https://www.instagram.com/koxja_tattoo/?hl=en" target="_blank" rel="noreferrer noopener">
        <img src={Instagram} alt="instagram logo" className="instagram-logo"/>
      </Link>
    </div>

  )
}

export default Footer