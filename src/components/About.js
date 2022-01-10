import React from 'react'
import { Link } from 'react-router-dom'

// Import artist components
import Katy from '../components/Katy'
import Jodie from '../components/Jodie'
import ArtistNav from '../components/ArtistNav'

// Import images
import Studio from '../images/other/studio.jpeg'

// Import styles
import '../styles/components/_about.scss'  
import '../styles/components/_aboutArtists.scss'  

// Bring image in

const About = () => {

  const studio = {
    name: "The Studio",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ut ipsum quis dignissim. Nam magna urna, mollis et sapien posuere, laoreet consequat ex. Praesent sagittis risus dui. Sed tellus tellus, feugiat ut tincidunt id, consequat nec nulla. Nullam mattis ligula et nisi porttitor, ullamcorper dictum nunc tincidunt. Mauris accumsan, ligula at consectetur tristique, quam risus elementum est, ac mollis odio nulla vel nulla. Pellentesque commodo efficitur interdum. Suspendisse scelerisque tortor fermentum laoreet molestie. Suspendisse venenatis pulvinar risus vitae mollis. Cras sollicitudin sem eros, et gravida metus posuere at. Pellentesque eu felis vitae justo luctus fringilla id dapibus magna.",
    imgURL: Studio
  }

  return (
    <div className="about-page">
      <div className="about-studio">

        <ArtistNav />

        <h1 className="name">{studio.name}</h1>
        <img src={studio.imgURL} alt={studio.imgURL} />
        <p className="about">{studio.about}</p>
      </div>

      <div id="about-katy">
        <Katy />
      </div>

      <div id="about-jodie">
        <Jodie />
      </div>
      
    </div>
  )
}

export default About



