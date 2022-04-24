import React from 'react'
import { useLocation } from 'react-router-dom'
import Carousel from '../Components/Details/Carousel';
import Navigation from '../Components/Navigation'

// require('../Styles/Details.css')

const Details = () => {
  
 const id = useLocation().state.productId;
  
  //console.log(id);

  return (
    <section>
      <Navigation />
      <main>
        <Carousel id = {id} />
      </main>
    </section>
  )
}

export default Details