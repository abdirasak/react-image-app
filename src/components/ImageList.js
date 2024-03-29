import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

function ImageList({ images }) {

  const renderImages = images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  return (
    <div className='image-container'>{renderImages}</div>
  )
}

export default ImageList