import React from 'react'
import '../App.css'


import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='large-logo'>     
                <img className='large-logo' src='nelson-logo-transparent.png' alt="Nelson Bakery" width="100%"/>
            </div>
        <div >
            <video src="/Nelson-Baker-Vid-No-Logo.mp4" autoPlay loop muted/>
          
        </div>
        </div>
    )
}

export default HeroSection
