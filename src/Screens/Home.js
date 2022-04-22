import React from 'react'
import Items from '../Components/Home/Items'
import Navigation from '../Components/Navigation'
import Title from '../Components/Home/Title'
import Footer from '../Components/Footer'
require('../Styles/Home.css')

const Home = () => {
  return (
     <section>
       <Navigation />
       <Title />
       <Items />
       <Footer />
     </section>
  )
}

export default Home