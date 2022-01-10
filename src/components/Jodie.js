import React from 'react'

import ArtistFooter from '../components/ArtistFooter'

import jodieImg from '../images/artists/jodie.jpeg'

const Jodie = () => {

  const jodie = {
    name: "Jodie",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ut ipsum quis dignissim. Nam magna urna, mollis et sapien posuere, laoreet consequat ex. Praesent sagittis risus dui. Sed tellus tellus, feugiat ut tincidunt id, consequat nec nulla. Nullam mattis ligula et nisi porttitor, ullamcorper dictum nunc tincidunt. Mauris accumsan, ligula at consectetur tristique, quam risus elementum est, ac mollis odio nulla vel nulla. Pellentesque commodo efficitur interdum. Suspendisse scelerisque tortor fermentum laoreet molestie. Suspendisse venenatis pulvinar risus vitae mollis. Cras sollicitudin sem eros, et gravida metus posuere at. Pellentesque eu felis vitae justo luctus fringilla id dapibus magna.",
    img: jodieImg
  }

  return (
    <>
      <div className="about-artist-container" id="about-jodie">
        <h1 className="name">{jodie.name}</h1>
        <img src={jodie.img} alt={jodie.imgURL} className="artist-img" />
        <p className="about">{jodie.about}</p>
      </div>

      <ArtistFooter />
    </>
  )
}

export default Jodie



