import React, { useState } from 'react'

export const Darkmode = () => {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState('Dark Mode')
    const toggleMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'White',
                backgroundColor: 'black'
            })
            setBtnText('Light Mode')
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText('Dark Mode')
        }
    }
    return (
        <div>
            <div className="container" style={myStyle}>
                <button type="button" onClick={toggleMode} class="btn btn-primary" >{btnText}</button>
              
            </div>

        </div>
    )
}
