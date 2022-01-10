import React from 'react'

import ArtistFooter from '../components/ArtistFooter'

import katyImg from '../images/artists/katy.jpeg'

const Katy = (instagram) => {

  const katy = {
    name: "Katy",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ut ipsum quis dignissim. Nam magna urna, mollis et sapien posuere, laoreet consequat ex. Praesent sagittis risus dui. Sed tellus tellus, feugiat ut tincidunt id, consequat nec nulla. Nullam mattis ligula et nisi porttitor, ullamcorper dictum nunc tincidunt. Mauris accumsan, ligula at consectetur tristique, quam risus elementum est, ac mollis odio nulla vel nulla. Pellentesque commodo efficitur interdum. Suspendisse scelerisque tortor fermentum laoreet molestie. Suspendisse venenatis pulvinar risus vitae mollis. Cras sollicitudin sem eros, et gravida metus posuere at. Pellentesque eu felis vitae justo luctus fringilla id dapibus magna.",
    imgURL: katyImg
  }

  return (
    <>
      <div className="about-page">
        <h1>{katy.name}</h1>
        <img src={katy.imgURL} alt={katy.imgURL} />
        <p className="studio-about">{katy.about}</p>
        <img src={instagram} alt="" />
      </div>

      <ArtistFooter />
    </>
  )
}

export default Katy



