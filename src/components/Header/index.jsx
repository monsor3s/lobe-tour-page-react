import React from 'react'

import Logo from '../../assets/logo.png'
import './style.sass'

function Header() {
  return (
    <div className="main-header">
      <img src={Logo} alt="logo header" />
      <nav className="header-nav">
        <a href="" className="nav-link">
          <div>Overview</div>
        </a>
        <a href="" className="nav-link">
          <div>Examples</div>
        </a>
        <a href="" className="nav-link">
          <div>Tour</div>
        </a>
        <a href="" className="nav-link">
          <div>Blog</div>
        </a>
        <a href="" className="nav-link">
          <div>Help</div>
        </a>
      </nav>
      <button className="main-button">Download</button>
    </div>
  )
}

export default Header