import React from 'react'

// Import styles
import '../styles/components/_contact.scss'  

const Contact = () => {

  
  return (
    <div className="contact-page">
      
      <div className="contact-info">
        <p className="contact-text">Hello! Thanks for wanting to get in touch with us here at KoxJa tattoo. We're super excited that you're interested in our work. 
            When you message us it would be great if you include information such as what you want tattooed, where you want it, and how big you would like it. Feel free to include any screen shots of our previous work if you want something similar. 
            If you're not sure of any of that, that's fine too and we can discuss it further. We look forward to hearing from you!
        </p>
    
        <div className="contact-emails">
          <a href="katy@tattoo.com" className="personal-email">katy@tattoo.com</a>
          <a href="jodie@tattoo.com" className="personal-email">jodie@tattoo.com</a>
        </div>
      </div>

    </div>
  )
}

export default Contact