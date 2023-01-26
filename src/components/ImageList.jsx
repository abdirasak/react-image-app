import React from 'react'

function ImageList({ images }) {
  return (
    <div>
      <h3>We have found: {images.length} images</h3>
    </div>
  )
}

export default ImageList