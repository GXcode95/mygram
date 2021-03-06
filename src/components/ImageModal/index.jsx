import React from 'react'
import { Image } from 'cloudinary-react'
import './style.scss'
const Modal = ({selectedImg, setSelectedImg}) => {

  const handleClick = (e) => {
    // prevent to close the modal when clicking on the image itself
    if( e.target.classList.contains('backdrop'))
      setSelectedImg(null) 
  }
  return (
    <div className="backdrop" onClick={handleClick}>
       <Image
        cloudName={process.env.REACT_APP_CLOUD_NAME}
        publicId={selectedImg}
        loading="lazy"
      />
    </div>
  )
}
export default Modal