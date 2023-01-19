import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact Me</Link></li>
        </ul>
    </nav>
  )
}
