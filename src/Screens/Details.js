import React from 'react'
import { useLocation } from 'react-router-dom'
import Buttons from '../Components/Details/Buttons';
import Carousel from '../Components/Details/Carousel';
import Cart from '../Components/Details/Cart';
import ProductInfo from '../Components/Details/ProductInfo';
import Navigation from '../Components/Navigation'

// require('../Styles/Details.css')

const Details = () => {
  
 const id = useLocation().state.productId;
  
  //console.log(id);

  return (
    <section className='relative'>
      <Navigation />
      <main>
        <Carousel id = {id} />
        <ProductInfo id={id} />
        <Buttons />
        <Cart />
      </main>
    </section>
  )
}

export default Details