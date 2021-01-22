import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import CardsMenu from '../CardsMenu'

function Menu () {

    return (
        <>
            <div className='menu_section'>
                
                <div className='menu_section__container'>
                <img className='anni-ervins-box'src='anni-ervins-box.jpg' alt="anni-ervins"/>

                 
                    <div className="menu_section__items">
                        <h2>Looking for unique cakes that taste incredible? </h2>
                        
                        <p>-----------</p>

                   

                    <h2>How it works?</h2>
                        <p>
                            Order your fabulous bespoke cake, personalise it with a chocolate message or even design your own cake. 
                            It is important to us that your cake be exactly what you want. Therefore, we limit the number of orders we accept to give each cake the attention it deserves.
                            
                        </p>
                       </div>
                       

                </div>
            </div>
   
            <CardsMenu/>
            <div className='menu_section'>
                
                <div className='menu_section__container'>
                    

                    <div className='menu_section__wrapper'>
                        <h2>Menu</h2>
                        <p>Our Menu is constantly changing and evolving, above are some of our staple products which you may order (decorations and style may vary). If you would like to customize any of our cakes please don't hesitate to get in touch! </p>
                        <p>-----------</p>

                        <h2>Bespoke Cake Pricing</h2>
                        <p>While the cost of our custom cakes is determined on an individual basis, starting at £35 for Birthday cakes. If the original design isn’t in line with your budget, we are happy to make alternative suggestions, so please feel free to inquire. </p>
                        <p>-----------</p>

                        <h2>Ordering & Delivery</h2>
                        <p> We kindly request 48 hours notice and that orders be placed by 12pm on the day of ordering. This can be done in person, by phone, social media or email.  If you need your cake sooner, please call us! 
                            Special delivery options need to be discussed in advance.</p>
                        <a  href="mailto:nelsoncakesforyou@gmail.com" className='social-icon-link-piccy'>
                          <i className='far fa-envelope' />
                        </a>
                    </div>
                    <div className='menu_section_disclaimer'>
                        <p>All sizing/decorations may vary</p>

                    </div>
                   
                </div>
                
            </div>
            <Cards />

        </>
    )
}
export default Menu