import React from 'react'
import Items from '../Components/Home/Items'
import Navigation from '../Components/Home/Navigation'
import Title from '../Components/Home/Title'
require('../Styles/Home.css')

const Home = () => {
  return (
     <section>
       <Navigation />
       <Title />
       <Items />
     </section>
  )
}

export default Home