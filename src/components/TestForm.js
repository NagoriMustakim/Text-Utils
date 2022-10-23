import React, { useState } from 'react'
import '../App.css';
export const TestForm = (props) => {
    const Uppercase = () => {
        let upper = text.toUpperCase()
        settext(upper)
    }
    const onchangehandler = (event) => {
        settext(event.target.value)

    }
    const lowercase = () => {
        settext(text.toLowerCase())
    }
    const removeAll = () => {
        settext("")
    }

    const speak = () => {
        
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        } 
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const [text, settext] = useState("Enter Text here")

    return (<>
        <h1 className='heading'>{props.heading}</h1>
        <div>
            <div className="container">
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} onChange={onchangehandler} rows="6" ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={Uppercase}>Uppercase</button>
                <button type="button" className="btn btn-primary m-3" onClick={lowercase}>lowercase</button>
                <button type="button" className="btn btn-primary m-3" onClick={removeAll}>Remove</button>
                <button type="submit" onClick={speak} className="btn btn-primary m-3" id="toggle">Speak</button>

            </div>
            <div className="container my-3">
                <h1 >Your Summary text</h1>
                <p>characters {text.length}</p>
                <p>words {text.split(" ").length}</p>
            </div>
        </div>
    </>

    )
}
