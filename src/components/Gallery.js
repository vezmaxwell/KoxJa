import React from 'react'

// Import componenents
import ArtistNav from '../components/ArtistNav'

// Imported images
import t1 from '../images/tattoos/tat1.jpg'
import t2 from '../images/tattoos/tat2.jpg'
import t3 from '../images/tattoos/tat3.jpg'
import t4 from '../images/tattoos/tat4.jpg'
import t5 from '../images/tattoos/tat5.jpg'
import t7 from '../images/tattoos/tat7.jpg'
import t8 from '../images/tattoos/tat8.jpg'
import t9 from '../images/tattoos/tat9.jpg'
import t10 from '../images/tattoos/tat10.jpg'
import t11 from '../images/tattoos/11.jpg'

// Import styles
import '../styles/components/_gallery.scss'  


const Gallery = () => {

  const tattArrKaty = [t1, t2, t3, t4, t5]
  const tattArrJodie = [t7, t8, t9, t10, t11]


  return (
    <div className="gallery-container">
{/* Map for Katie */}
        <div className="tatt-map katy-tattoos">
          <h2 className="name">By Katy</h2>
        {
          (tattArrKaty).map(tattoos => {
            return (<img src={tattoos} alt="tattoo img" />)
          })
        }
        </div>

{/* Map for Jodie */}
        <div className="tatt-map jodie-tattoos">
          <h2 className="name">By Jodie</h2>
        {
          (tattArrJodie).map(tattoos => {
            return (<img src={tattoos} alt="tattoo img" />)
          })
        }
        </div>

        <a href="#top" className="top">Back to top</a>


    </div>
  )
}

export default Gallery