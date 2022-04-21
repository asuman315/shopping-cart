import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Screens/Home'
require('./App.css')

export const AppContext = createContext();

const App = () => {
  const [data, setData] = useState([])

      const getProductsFromApi = async () =>  {
        try {
          const response = await axios.get('https://asmn-shopping-cart.herokuapp.com/api/shopping-carts?fields=name,price&populate=image');

          const productsList = response.data.data;

          //console.log(products);
          setData(productsList);
          
        } catch (error) {
          console.log(error);
        }
      }

       useEffect(() => {
        getProductsFromApi();
       }, [])

  return (
    <AppContext.Provider value={{ data, setData }}>
      <Routes>
        <Route path='/' element={<Home data={data} />} />
      </Routes>
    </AppContext.Provider>
  )
}
export default App