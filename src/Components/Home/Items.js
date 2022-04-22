import React, { useContext } from 'react'
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Details from '../../Screens/Details';

const Items = () => {

 const { data } = useContext(AppContext);

  const navigate = useNavigate();

  const handler = (e) => {
    navigate('/details', { 
      state: { 
        productId: e.currentTarget.getAttribute('data-id') 
      }, 
    })
  }

  return (
   <>
     <hr className='products-hr' />
     <main className="products-container"> 
      { data.map(product => {
          const item = product.attributes
         // console.log(item);
        const { name, image, price, discountPercentage } = item;

          //get url of the first images
          const imageUrl = image.data[0].attributes.url;
          const id = product.id
          
          //console.log(imageUrl, id);

          return (
            <article 
              className="product-container" 
              key={ id }
              data-id = { id }
              onClick={ handler }
            >
              <div className="discount-percentage">
                - { discountPercentage }
              </div>
              <img 
                src={ imageUrl } 
                className="product-image" 
                alt={ name } 
              />
              <hr className='product-hr' />
              <div className="product-info">
                <p className='product-name'>{ name }</p>
                <p className='product-price'>{ price }</p>
              </div>
            </article>
          )
      }) }
     </main>
   </>
  )
}

// e.currentTarget.getAttribute('data-id')

export default Items