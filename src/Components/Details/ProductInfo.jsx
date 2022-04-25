import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductInfo = ({ id }) => {
  const [product, setProduct] = useState();

    const [ productDetails, setProductDetails ] = useState({ 
      brand: '',
      name: '',
      desc: '',
      price: ''
     }); 
  
  // const [brand, setBrand] = useState();
  // const [productName, setProductName] = useState()
  // const [productDesc, setProductDesc] = useState()
  // const [price, setPrice] = useState()

   const getProductsFromApi = async () => {
  try {
   const response = await axios.get(`https://asmn-shopping-cart.herokuapp.com/api/shopping-carts/${id}?populate=*`);

   const getProductInfo = response.data.data.attributes
    //console.log(getProductInfo)
    setProduct(getProductInfo)

    setProductDetails({ 
      brand: product.brand,
      name: product.name,
      desc: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      discountPrice: product.discountPrice
     });

  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getProductsFromApi();
 }, product)

 const { name, desc, brand, price, discountPercentage, discountPrice } = productDetails;

  return (
     <section className='p-4'>
        <h3 className='my-4 font-bold tracking-wide'>{ brand }</h3>
        <h2 className=' my-0 text-[1.5rem] font-extrabold tracking-wide' >{ name }</h2>
        <p className='my-4 text-[1rem] font-light'>{ desc }</p>
      <article className='flex justify-between'>
        <div className='flex w-[12rem] border-solid border-1 border-[red] justify-between'>
          <p className='font-black text-[1.2rem]'>{ price }</p>
          <p className='bg-[#9ca3af] text-primary-dark px-1.5 w-12 rounded-sm font-bold '>-{ discountPercentage }</p>
        </div>
        <p className='line-through text-[1.1rem]'>{ discountPrice }</p>
      </article>
     </section>
  )
}

export default ProductInfo