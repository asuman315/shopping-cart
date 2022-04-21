import React, { useContext } from 'react'
import { AppContext } from '../../App';

const Items = () => {

 const { data } = useContext(AppContext)

  return (
   <>
     <hr />
     <main className="items-container"> 
      { data.map(product => {
          const item = product.attributes
          //console.log(item);
          const { name, image, price } = item;

          //get url of the first images
          const imageUrl = image.data[0].attributes.url;
          
          console.log(imageUrl);
          return (
            <article className="product-container" key={product.id}>
              <img 
                src={ imageUrl } 
                className="product-image" 
                alt={ name } 
              />
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

export default Items