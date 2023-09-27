import React from 'react'
import './imageCard.css'

function ImageCard({ image }) {
  return (
    <div >
      <img className='image' src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageCard