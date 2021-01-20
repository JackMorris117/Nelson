import React from 'react'
import Cards from '../Cards'
import '../ContactSection.css'
function Contact () {

    return (
        <>

            <div className='contact_section'>
                <div className='contact_section__container'>
                <img className='anni-ervins'src='anni-ervins.jpg' alt="anni-ervins"/>
                        <ul className='contact_section__items'>
                            <h1>Come Find Us!</h1>
                            <p>We're a small business in York. We tend to move around a lot so be sure to follow us on socials! For orders feel free to call or message us!</p>
                            <a  href="mailto:nelsoncakesforyou@gmail.com" className='social-icon-link-piccy'>
                            <i className='far fa-envelope' />
                            </a>
                            <h2>Email us!</h2>
                            <a href="mailto:nelsoncakesforyou@gmail.com">nelsoncakesforyou@gmail.com</a>
                            <h2>------</h2>
                            <i className="fas fa-phone"></i>
                            <h2>Or call/message us at</h2>

                            <h2>07460 412420</h2>
                        </ul>

                </div>

            </div>
            <Cards/>
        </>
    )
}
export default Contact