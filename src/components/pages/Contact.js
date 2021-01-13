import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import '../ContactSection.css'
import Fade from 'react-reveal/Fade'
function Contact () {

    return (
        <>

            <div className='contact_section'>
                <div className='contact_section__container'>
                <img className='anni-ervins'src='anni-ervins.jpg' alt="anni-ervins"/>
                <Fade bottom>
                        <ul className='contact_section__items'>
                            <h1>Come Find Us!</h1>
                            <p>We're a small business in York. We tend to move around a lot so be sure to follow us on socials! For orders feel free to call or message us!</p>
                            <i className='far fa-envelope'/>
                            <h2>Email us!</h2>
                            <a href="mailto:nelsoncakesforyou@gmail.com">nelsoncakesforyou@gmail.com</a>
                            <h2>------</h2>
                            <i className="fas fa-phone"></i>
                            <h2>Or call/message us at</h2>

                            <h2>07460 412420</h2>
                        </ul>
                </Fade>

                </div>

            </div>
            <Cards/>
        </>
    )
}
export default Contact