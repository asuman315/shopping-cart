import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
require('../Styles/Navigation.css')

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <div className="nav-container">
          <p className="logo"><span>Asuman's</span> Grocery</p>
          <HiOutlineShoppingCart className='cart-icon' />
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navigation