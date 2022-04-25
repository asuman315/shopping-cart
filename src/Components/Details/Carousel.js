import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
/*===============================================
          Parent Component  
================================================*/
const Carousel = ({ id }) => {

  const [ imageUrls, setImageUrls ] = useState(['']);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ imgNumber, setImgNumber ] = useState();
  const [ carouselBtnClicked, setCarouselBtnClicked ] = useState(false)

 const getProductImagesFromApi = async () => {
  try {
   const response = await axios.get(`https://asmn-shopping-cart.herokuapp.com/api/shopping-carts/${id}?populate=image`);

   //console.log(response)

   const imageArray = response.data.data.attributes.image.data;
   const getImageUrls =imageArray.map(image => {
     console.log(image.attributes.formats.thumbnail.url);
     return image.attributes.url;
   })

     setImageUrls(getImageUrls);
     setImgNumber(getImageUrls.length); 

  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getProductImagesFromApi();
 }, [])

  return (
    <section className=' relative flex flex-col justify-center width-screen overflow-hidden'>
      <ImagesContainer 
        imageUrls={imageUrls} 
        currentSlide={currentSlide} 
        setCurrentSlide={ setCurrentSlide } 
        carouselBtnClicked={ carouselBtnClicked }
      />
      { //Only show carousel controls if more than one images are displayed
      imgNumber <= 1 ? null : 
      <CarouselControls 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide} 
          imageUrls={imageUrls} 
          setCarouselBtnClicked={ setCarouselBtnClicked }
      /> } 
    </section>  
  )
}


/*===============================================
          Images Wrapper Component  
================================================*/
const ImagesContainer = ({ imageUrls, currentSlide, setCurrentSlide, carouselBtnClicked } ) => {

  //set auto slide
    useEffect(() => {
     const slideInterval = setInterval(() => {
          setCurrentSlide(currentSlide => currentSlide < imageUrls.length - 1 ? currentSlide + 1 : 0 )
      }, 3000) 
        
      //stop auto slide if either carousel button is clickes
      if (carouselBtnClicked) {
        clearInterval(slideInterval);
      }

      return () => clearInterval(slideInterval);
    })

  return (
    <div className="whitespace-nowrap ease duration-1s h-[350px] " style={{ transform: `translateX(${-currentSlide * 100}%)` }} >
      {
        imageUrls.map((imageUrl, index) => {
          return (<ImageContainer imageUrl={imageUrl} key={index} />
          );
        })
      }
    </div>
  )
}


/*===============================================
          Image Wrapper Component  
================================================*/
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


/*===============================================
          Carousel Button Controls Component  
================================================*/
const CarouselControls = ({ imageUrls, currentSlide, setCurrentSlide, setCarouselBtnClicked }) => {

  const prev = () => {
    const index = currentSlide <= 0 ? imageUrls.length - 1 : currentSlide - 1
    setCurrentSlide(index)
    setCarouselBtnClicked(true)
  };

  const next = () => {
    const index = currentSlide >= imageUrls.length - 1 ? 0 : currentSlide + 1
    setCurrentSlide(index)
    setCarouselBtnClicked(true)
  }

  //console.log(currentSlide);

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