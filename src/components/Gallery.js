// store images in an array 
// map through them in the jsx 

import React from 'react'

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

const Gallery = () => {

  const tattArr = [t1, t2, t3, t4, t5, t7, t8, t9, t10, t11]


  return (
    <>
      {
        (tattArr).map(tattoos => {
          return (<img src={tattoos} alt="tattoo img" />)
        })
      }
    </>
  )
}

export default Gallery