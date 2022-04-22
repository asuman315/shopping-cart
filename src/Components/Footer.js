import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { RiTwitterLine } from 'react-icons/ri';
require('../Styles/Footer.css')

const Footer = () => {
  return (
    <footer>
      <article className='company'>
         <h4>COMPANY</h4>
         <p>About Us</p>
         <p>Return</p>
         <p>Help</p>
      </article>
      <article className='visit'>
         <h4>Visit</h4>
         <p>Store locator</p>
      </article>
      <article className='connect'>
         <h4>Connect</h4>
         <p>Contact Us</p>
      </article>
      <article className='social-media'>
        <AiOutlineInstagram className='sm-icon'/>
     <RiFacebookCircleLine className='sm-icon' />
     <RiTwitterLine className='sm-icon' />
      </article>
    </footer>
  )
}

export default Footer