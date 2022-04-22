# Getting Started with Create React App

## Challenges
Passing the id of the clicked product from the 'home' page to the 'details' page so I can grab the info (name, price, images and so on) of that specific/clicked product via the url of the API like so...

 ```js 
 const response = await axios.get(`https://asmn-shopping-cart.herokuapp.com/api/shopping-carts/${id}?populate=image`); 
 ```

Solution: I used the `useLocation` hook to move props (id)from one component (the one I was navigating from) to another (the one I was navigating to) via `navigate()` function.

 - Inside the component we are navigating from ( in this case `Items.js` ) 
 
 ```js
   const handler = (e) => {
    navigate('/details', { 
      state: { 
        productId: e.currentTarget.getAttribute('data-id') 
      }, 
    })
  }
  ```
  - Inside the component we are navigating to (`Details.js`) ...

  ```js
  import { useLocation } from 'react-router-dom'
   const id = useLocation().state.productId;
   console.log(id); //returns the unique id of the clicked product
  ```

## Lessons.
`event.currentTarget` makes the `click` event only fire in the parent `div`. With `event.target`, the click event fires in any clicked child element like so...


