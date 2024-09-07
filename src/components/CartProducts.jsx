import React from 'react'
import useShop from '../ShopContext'

function CartProducts() {
    const {products,removeFromCart,total}=useShop()
  return (
    <div className='cart-products'>
        <h2>cart products</h2>
        {products.map((product)=>(
            <div className="cart-product">
                <div className="cart-title-img">
                    <img src={product.image} alt="" />
                    <span>{product.name}</span>

                </div>
                <h5>{product.price}</h5>
                <span className='delete' onClick={()=>{
                    removeFromCart(product)
                }}>Delete</span>
            </div>
        ))}
        <div className="toalt-price">
            <h2> Total Price : ${total}</h2>
        </div>
        

    </div>
  )
}

export default CartProducts