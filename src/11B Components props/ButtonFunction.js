import React from 'react'
import './ButtonFunction.css'
import ButtonTemplate from './components/ButtonTemplate'

function ButtonFunction() {
  return (
    <div className = "App">
      <ButtonTemplate text = "Hi"/>
      <ButtonTemplate text = "Learning"/>
      <ButtonTemplate text = "React"/>
    </div>
  )
}

export default ButtonFunction

// https://replit.com/@cohort0/11B-Component-props-Solution-KyuhwanKim#src/App.jsx

//This lesson, learnt about passing arguments as props.
//Also, learnt to destructure props in reusable components