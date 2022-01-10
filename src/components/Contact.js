import React from 'react'

import instagram from '../images/icons/instagram.png'
import email from '../images/icons/envelope.png'

const Contact = () => {

  
  return (
    <div className="contact-page">
      
      <p className="contact-text">"Hello! Thanks for wanting to get in touch with us here at KoxJa tattoo. We're super excited that you're interested in our work. 
          When you message us it would be great if you include information such as what you want tattooed, where you want it, and how big you would like it. Feel free to include any screen shots of our previous work if you want something similar. 
          If you're not sure of any of that, that's fine too and we can discuss it further. We look forward to hearing from you!
      </p>
  
      <div className="contact-emails">
        <a href="katy@tattoo.com" className="">katy@tattoo.com</a>
        <a href="jodie@tattoo.com" className="">jodie@tattoo.com</a>
        <img src={instagram} alt="instagram icon" />
        <img src={email} alt="instagram icon" />
      </div>

    </div>
  )
}

export default Contact