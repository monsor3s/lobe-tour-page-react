import React from 'react'

import './style.sass'

function Button({ className }) {
  return (
    <button className={`main-button ${className}`}>Download</button>
  )
}

export default Button