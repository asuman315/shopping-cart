import React from 'react'
import { useLocation } from 'react-router-dom'
import Images from '../Components/Details/Images';
import Navigation from '../Components/Navigation'

const Details = () => {
  
 const id = useLocation().state.productId;
  
  console.log(id);

  return (
    <section>
      <Navigation />
      <main>
        <Images id = {id} />
      </main>
    </section>
  )
}

export default Details