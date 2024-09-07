import React, { useEffect, useState } from 'react'
import useShop from '../ShopContext'

function Product({product}) { 
    const [isInCart,setIsInCart]=useState(true)
    const {addToCart,products,removeFromCart}=useShop()

useEffect(()=>{
    const isCacrt=products.filter((pro)=>pro.id ==product.id);
    console.log(isCacrt)

    if(isCacrt.length>0){
        setIsInCart(true);

    }else{
        setIsInCart(false)
    }
},[products])



const handleAdToCart=()=>{
    if(isInCart){
        removeFromCart(product)

    }else{
    addToCart(product)

    }
    console.log(products)
}
  return (
   <div className='card' style={{
    minHeight:"100",
    background:`linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),
    url(${product.image})
    `,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
   }}>
    <div className='info'>
        <span>{product.name}</span>
        <span>{product.price}</span>

    </div>

    <button className={ `btn ${isInCart ? 'btn-seceondry': 'btn-primaray'} `}onClick={handleAdToCart}>{isInCart ?"-":"+"}</button>
   
    
   </div>
  )
}

export default Product