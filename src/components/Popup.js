import React from 'react'
import '../App.css';

export const Popup = () => {
    
    const pup = async () => {
        if (typeof window.ethereum !== "undefined") {
            let account = await window.ethereum.request({ method: 'eth_requestAccounts' })
            let id = document.getElementById('pup')
            id.innerHTML = "Connected"
            console.log('connected')
            console.log(account)
        }
        else {
            alert("Please install Metamask")
        }
    }
    return (
        <>
            <div className="container">
                <button className='popup-button' id='pup' onClick={pup}>Connect</button>

            </div>

        </>
    )
}
