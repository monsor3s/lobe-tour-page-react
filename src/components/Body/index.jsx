import React from 'react'
import Button from '../../objects/Button'

import VideoImg from "../../assets/video-img.jpg"

import './style.sass'

function Body() {
  return (
    <section className="main-section">
        <h1 className="main-title">Lobe <span className="section-heading">Tour</span></h1>
        <span className="main-subtitle">Build your first machine learning model in ten<br/> minutes. No code or experience required.</span>
          <div className="tour-video-container">
            <div className="frame-youtube">
              <img className="img-video" src={VideoImg} alt="imagem video" />
            </div>
          </div>
        <h1 className="main-text">Train your<br/> app with Lobe</h1>
        <Button className="-large" />
    </section>
  )
}

export default Body