import React from 'react'

import './style.sass'
import Button from '../Button'

function Body() {
  return (
    <div className="main-body">
      <h1 className="main-title">Lobe Tour</h1>
      <span className="main-subtitle">Build your first machine learning model in ten<br/> minutes. No code or experience required.</span>
      <h1 className="main-text">Train your<br/> app with Lobe</h1>
      <Button />
    </div>
  )
}

export default Body