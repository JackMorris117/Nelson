import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import CardsMenu from '../CardsMenu'
import { HashLink } from 'react-router-hash-link';



function Menu () {

    return (
        <>
            <div className='menu_section'>
                
                <div className='menu_section__container'>
                <img className='anni-ervins-box'src='menuback.jpg' alt="anni-ervins"/>

                 
                    <div className="menu_section__items">
                        <h2>Looking for unique cakes that taste incredible? </h2>
                        
                        <p>-----------</p>

                   

                    <h2>How it works?</h2>
                        <p>
                            Order your fabulous bespoke cake, personalise it with a chocolate message or even design your own cake. 
                            It is important to us that your cake be exactly what you want. Therefore, we limit the number of orders we accept to give each cake the attention it deserves.
                            
                        </p>
                        <HashLink smooth to='/menu#details' > Click for more details! </HashLink>

                       </div>


                </div>
            </div>
   
            
           <div className="breaker" id="details">
               <h1><br></br></h1>
           </div>
            <div className='menu_section' id="details" >
                
                <div className='menu_section__container' >
                    

                    <div className='menu_section__wrapper' >
                        <h2>Menu</h2>
                        <p>Lemon and Raspberry / Lemon and Blueberry from £35</p>
                        <p>Red Velvet / Peach White Velvet from £40</p>
                        <p>Chocolate and Mixed Berry / Vanilla and Mixed Berry from £35</p>
                        <p>Caramel from £35</p>
                        <p>Orange, Cardamom and Pistachio from £35</p>
                        <p>Black Forest Gateaux from £35</p>
                        <p>Lemon, Elderflower and Blackcurrant from £35</p>
                        <p>Almond and Raspberry from £40</p>
                        <p>Chocolate / Vanilla from £35</p>
                        Gluten free and Vegan options available
                        <p>-----------</p>
                        <p>Our Menu is constantly changing and evolving, above are some of our staple products which you may order (decorations and style may vary). If you would like to customize any of our cakes please don't hesitate to get in touch! </p>
                        <p>-----------</p>

                        <h2>Bespoke Cake Pricing</h2>
                        <p>While the cost of our custom cakes is determined on an individual basis, starting at £35 for Birthday cakes. If the original design isn’t in line with your budget, we are happy to make alternative suggestions, so please feel free to inquire. </p>
                        <p>-----------</p>

                        <h2>Ordering & Delivery</h2>
                        <p> We kindly request a 48 hours notice and that orders be placed by 12pm on the day of ordering. This can be done in person, by phone, social media or email. We also require on smaller cakes, a minimum order of at least 6 individual cakes. If you need your cake sooner, please call us! 
                            Special delivery options need to be discussed in advance.</p>
                        <a  href="mailto:nelsoncakesforyou@gmail.com" className='social-icon-link-piccy'>
                          <i className='far fa-envelope' />
                        </a>
                        <p>-----------</p>

                        <h2>Food Allergies & Intolerances</h2>
                        <p>Unfortunately we can not guarantee that all food is 100% allergen free. We bake all of our cakes in the same area so there might be a risk of cross contamination, particularly nuts and gluten. If yourself or anyone else in your party has any allergies please inform us. Will endeavour to facilitate for all needs.</p>

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