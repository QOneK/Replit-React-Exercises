import React from 'react'
import './ButtonTemplate.css'

function ButtonTemplate({text}) {
  return (
    <button className="button">{text}</button>
  )
}

export default ButtonTemplate