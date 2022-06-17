import React from 'react'
import '../../src/style.css'

export default function MainContent(){
    return (
        <main>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className='main--facts'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has all over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile app</li>
            </ul>
        </main>
    )
}