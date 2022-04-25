import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Screens/Home'
import Details from './Screens/Details'
require('./App.css')


export const AppContext = createContext();

const App = () => {
  const [items, setItems] = useState([])

      const getProductsFromApi = async () =>  {
        try {
          const response = await axios.get('https://asmn-shopping-cart.herokuapp.com/api/shopping-carts?populate=*');

          const productsList = response.data.data;

          setItems(productsList);

          //console.log(productsList);
          
        } catch (error) {
          console.log(error);
        }
      }

       useEffect(() => {
        getProductsFromApi();
       }, [])

      // items.map(item => {
      //   if(item.id == 3) {
      //     console.log(item);
      //   }
      // })

  return (
    <AppContext.Provider value={{ items, setItems }}>
      <Routes>
        <Route 
          path='/shopping-cart' 
          element={<Home items={items} />} 
        />
        <Route 
          path='/details' 
          element={<Details items={items} />} 
        />
      </Routes>
    </AppContext.Provider>
  )
}
export default App

// fields = name, price, discountPercentage & populate=image