import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Carousel = ({ id }) => {

 const [ imageUrls, setImageUrls ] = useState(['']);
  const [currentSlide, setCurrentSlide] = useState(0);

 const getProductImagesFromApi = async () => {
  try {
   const response = await axios.get(`https://asmn-shopping-cart.herokuapp.com/api/shopping-carts/${id}?populate=image`);

   const imageArray = response.data.data.attributes.image.data;
   const getImageUrls = imageArray.map(image => {
         return image.attributes.url;
    });

     setImageUrls(getImageUrls); 

  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getProductImagesFromApi();
 }, [])

  const slideInterval = useRef();

  //start slide timer on mouseout
  // const startSlideTimer = () => {
  //   stopSlideTimer()
  //   slideInterval.current = setInterval(() => {
  //     setCurrentSlide(currentSlide => currentSlide < imageUrls.length - 1 ? currentSlide + 1 : 0)
  //   })
  // }

  //stop slide timer on hover
  // const stopSlideTimer = () => {
  //   if (slideInterval.current) {
  //     clearInterval(slideInterval.current)
  //   }
  //}

  // useEffect(() => {
  //   startSlideTimer()

  //   return () => stopSlideTimer()
  // }, [])

  return (
    <section className=' relative flex flex-col justify-center width-screen '>
      <ImagesContainer 
        imageUrls={imageUrls} 
        currentSlide={currentSlide} setCurrentSlide={ setCurrentSlide } 
        // startSlideTimer={ startSlideTimer }
        // stopSlideTimer={ stopSlideTimer }
      />
     <CarouselControls 
        currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} 
        imageUrls={imageUrls} 
        //  startSlideTimer={ startSlideTimer }
      /> 
    </section>  
  )
}


const ImagesContainer = ({ imageUrls, currentSlide, setCurrentSlide, startSlideTimer, stopSlideTimer } ) => {

  //set auto slide
    useEffect(() => {
      const slideInterval = setInterval(() => {
          setCurrentSlide(currentSlide => currentSlide < imageUrls.length - 1 ? currentSlide + 1 : 0 )
      }, 3000)

      return () => clearInterval(slideInterval);
    })


  return (
    <div className="whitespace-nowrap ease duration-1s h-[350px]" style={{ transform: `translateX(${-currentSlide * 100}%)` }} >
      {
        imageUrls.map((imageUrl, index) => {
          return (<ImageContainer imageUrl={imageUrl} key={index} />
          );
        })
      }
    </div>
  )
}


const ImageContainer = ({ imageUrl }) => {
  return (
    <article  
      className='inline-block w-full h-full'
    >
      <img
        className="h-full object-fit"
        src={imageUrl}
        alt='image'
      />
    </article>
  )
} 


const CarouselControls = ({ imageUrls, currentSlide, setCurrentSlide, startSlideTimer }) => {

  const prev = () => {

   // startSlideTimer()

    const index = currentSlide <= 0 ? imageUrls.length - 1 : currentSlide - 1
    setCurrentSlide(index)
  };

  const next = () => {

    //startSlideTimer()

    const index = currentSlide >= imageUrls.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(index)
  }

  console.log(currentSlide);

  return (
    <section className='absolute w-full flex justify-between px-0'>
      <button onClick={ prev } className="text-[4rem] text-[#7f1d1d] ">
          <FiChevronLeft />        
      </button>
      <button onClick={ next } className="text-[4rem] text-[#7f1d1d]">
          <FiChevronRight /> 
        </button>  
    </section>
  )
}

export default Carousel

// onMouseEnter = { stopSlideTimer } onMouseOut = { startSlideTimer }