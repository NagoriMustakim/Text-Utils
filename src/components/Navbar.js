import React from 'react'
import '../App.css';

export default function Navbar(props) {
  return (
    <nav>

    <ul>
      <li>Home</li>
      <li> About us</li>
      <li>Services</li>
      <li>Contact us</li>
    </ul>
    <h1>{props.tittle}</h1>
  </nav>
  
  )
}
