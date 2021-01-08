import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import '../ContactSection.css'


function Contact () {

    return (
        <>
        <img className='anni-ervins'src='anni-ervins.jpg' alt="anni-ervins"/>

            <div className='contact_section'>
                <h1>Come Find Us!</h1>
                <div className='contact_section__container'>
                    <ul>
                        <h2>TEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXTTEXT TEXT</h2>
                    </ul> 
                    <div className='contact_section__wrapper'>
                        <ul className='contact_section__items'>
                            <h2>Email us!</h2>
                            <a href="mailto:nelsoncakesforyou@gmail.com">nelsoncakesforyou@gmail.com</a>
                            <h2>Or call/text us at 07460 412420</h2>

                        </ul>
                    </div>
                </div>
            </div>
            <Cards/>
        </>
    )
}
export default Contact