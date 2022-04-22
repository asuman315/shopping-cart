import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Images = ({ id }) => {

 const [ imageUrls, setImageUrls ] = useState();

 const getProductImagesFromApi = async () => {
  try {
   const response = await axios.get(`https://asmn-shopping-cart.herokuapp.com/api/shopping-carts/${id}?populate=image`);

   const productsList = response.data.data.attributes;

   const imageUrlOne = productsList.image.data[0].attributes.url
   const imageUrlTwo = productsList.image.data[1].attributes.url
   const imageUrlThree = productsList.image.data[2].attributes.url

   setImageUrls([ imageUrlOne, imageUrlTwo, imageUrlThree ]) 

  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getProductImagesFromApi();
 }, [])

 console.log(imageUrls);

  return (
    <h1>Images - {id}</h1>
  )
}

export default Images