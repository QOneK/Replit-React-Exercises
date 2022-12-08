import React from 'react'
import './Button.css'

function Button({text, setEmoji}) {
  return (
    <div className = "container">
      <button onClick = {(e) => setEmoji(text)}
      className = "button">{text}</button>
    </div>
  )
}

export default Button