import React from 'react'
import Button from '../Button'

import VideoImg from "../../assets/video-img.jpg"

import './style.sass'

function Body() {
  return (
    <body className="main-body">
      <h1 className="main-title">Lobe Tour</h1>
      <span className="main-subtitle">Build your first machine learning model in ten<br/> minutes. No code or experience required.</span>
      <div className="tour-video-container">
        <div className="frame-youtube">
          <img className="img-video" src={VideoImg} alt="imagem video" />
        </div>
      </div>
      <h1 className="main-text">Train your<br/> app with Lobe</h1>
      <Button />
    </body>
  )
}

export default Body