import React from 'react'
import Logo from '../../assets/logo.png'
import LogoLobe from '../../assets/lobe-logo.png'
import LogoTwitter from '../../assets/twitter-logo.png'
import LogoYoutube from '../../assets/youtube-logo.png'

import './style.sass'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <img className="footer-logo" src={Logo} alt="logo" />
          <div className="footer-copywrite">
            <p className="footer-copywrite-text">A product by Microsoft.</p>
            <p className="footer-copywrite-text">All rights reserved.</p>
            <p className="footer-copywrite-text">© Microsoft 2021</p>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-heading">About</p>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Download</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Overview</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Examples</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Blog</a>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-heading">General</p>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Notice</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">License</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Press Inquiry</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Press Images</a>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-heading">Resources</p>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Help</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Tour</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Contact</a>
          </div>
          <div className="footer-column-link-container">
            <a href="" className="footer-column-link">Privacy</a>
          </div>
        </div>
        <div className="footer-social-links">
          <img className="footer-social-icon" src={LogoLobe} alt="logo lobe" />
          <img className="footer-social-icon" src={LogoTwitter} alt="logo twitter" />
          <img className="footer-social-icon" src={LogoYoutube} alt="logo youtube" />
        </div>
      </div>
    </footer>
  )
}

export default Footer