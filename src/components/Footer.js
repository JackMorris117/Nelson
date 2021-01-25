import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Coming Soon! Newsletter to keep updated!
        </p>
        <p className='footer-subscription-text'>
          Follow us on socials!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Coming Soon'
            />
            <Button buttonStyle='btn--primary'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/menu'>How it works</Link>
            <Link to='/contact'>Contact Info</Link>
            <Link to='/contact'>Orders</Link>
          </div>
   
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/nelsonbakery/">Instagram</a>
            <a href="https://www.facebook.com/Nelsoncakesforyou/">Facebook</a>
            <a href="mailto:nelsoncakesforyou@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/nelson-logo-transparent-b-w.png' alt="logo" height={200}/>

            </Link>
          </div>
          <a  href="https://www.allyouneedislovephotography.co.uk/" >
          <p className='website-rights'>Allyouneedislove<br></br>photography</p>
          </a>
          <a  href="https://larafrostphotography.com/" >
          <p className='website-rights'>Lara Frost<br></br>photography</p>
          </a>


          <small className='website-rights'>Nelson Bakery © 2020</small>
          <a  href="https://www.linkedin.com/in/jack-v-morris/" >
          <p className='website-rights'>Site credits: <br></br>Jack Morris</p>
          </a>

          <div className='social-icons'>
            <a  href="https://www.facebook.com/Nelsoncakesforyou/" className='social-icon-link facebook'>
              <i className='fab fa-facebook-f' />
            </a>
 
            <a  href="https://www.instagram.com/nelsonbakery/" className='social-icon-link instagram'>
              <i className='fab fa-instagram' />
            </a>
         
            <a  href="mailto:nelsoncakesforyou@gmail.com" className='social-icon-link instagram'>
              <i className='far fa-envelope' />
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;