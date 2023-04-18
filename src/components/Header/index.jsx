import React from 'react'
import Button from '../Button'

import Logo from '../../assets/logo.png'
import './style.sass'

function Header() {
  return (
    <header className="main-header">
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
      <Button />
    </header>
  )
}

export default Header