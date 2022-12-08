import React, {useState} from 'react'
import './EmojiIcon.css'

// be sure to have the right import of button! (there is more than one!)
import Button from './Button'

function EmojiIcon() {
// useState function goes BEFORE return statement
    const [emoji, setEmoji] = useState("🤩")
    return (
        <div className = "container">
            <div className = "counter">
                {/* this is the middle output. Output is current state of emoji */}
                <h1>{emoji}</h1>
            </div>
            <div className = "btns">
                <Button setEmoji={setEmoji} text = "👋"/>
                <Button setEmoji={setEmoji} text = "😃"/>
                <Button setEmoji={setEmoji} text = "💗"/>
            </div>
        </div>
  )
}

export default EmojiIcon