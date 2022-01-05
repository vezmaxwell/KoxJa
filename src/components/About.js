import React from 'react'

// Bring image in

const About = () => {

  const studio = {
    name: "The Studio",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ut ipsum quis dignissim. Nam magna urna, mollis et sapien posuere, laoreet consequat ex. Praesent sagittis risus dui. Sed tellus tellus, feugiat ut tincidunt id, consequat nec nulla. Nullam mattis ligula et nisi porttitor, ullamcorper dictum nunc tincidunt. Mauris accumsan, ligula at consectetur tristique, quam risus elementum est, ac mollis odio nulla vel nulla. Pellentesque commodo efficitur interdum. Suspendisse scelerisque tortor fermentum laoreet molestie. Suspendisse venenatis pulvinar risus vitae mollis. Cras sollicitudin sem eros, et gravida metus posuere at. Pellentesque eu felis vitae justo luctus fringilla id dapibus magna.",
    imgURL: "tattoo studio image"
  }

  return (
    <div className="about-page">
      <h1>{studio.name}</h1>
      <img src={studio.imgURL} alt={studio.imgURL} />
      <p className="studio-about">{studio.about}</p>
    </div>
  )
}

export default About



