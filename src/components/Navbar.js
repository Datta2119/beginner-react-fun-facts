import React from 'react'
import '../../src/style.css'
import ReactLogo from '../images/react-logo.png'

export default function Navbar(){
    return (
        <nav>
            <img src={ReactLogo} alt="react-icon" className='nav--icon'/>
            <h3 className='nav--logo_text'>Fun facts about React</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
}