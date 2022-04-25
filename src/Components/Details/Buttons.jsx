import React, { useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Buttons = () => {

  return (
      <section className='px-4'>
        <ItemNumber />
        <CtaBtn />
      </section>
  )
}

const ItemNumber = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
     setCount(count + 1)
  }
  
  const handleDecreament = () => {
     setCount(count >= 1 ? count - 1 : 0)
  }

   return (
     <div className='px-4 flex justify-between border-0 outline-none bg-[#d1d5db] mt-0 items-center py-3.5 rounded-md'>
        <BiMinus 
           className='w-6 h-6 font-bold lg:cursor-pointer'
           onClick={ handleDecreament }
        />
        <p className='self-center h-full font-extrabold text-[1rem] mb-0 border-0'>{ count }</p>
        <BiPlus 
           className='w-6 h-6 font-bold lg:cursor-pointer'
           onClick={ handleIncreament }
        />
     </div>
   )
}

const CtaBtn = () => {
  return (
    <button className='text-center w-full bg-primary-dark mt-9 mb-12 py-4 text-[1.5rem] text-white flex flex-row items-center justify-center border-0 outline-none'> <HiOutlineShoppingCart className='absolute left-[5rem]' />Add to cart</button>
  )
}

export default Buttons