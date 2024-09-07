import React from 'react'
import { Link } from 'react-router-dom'
import useShop from '../ShopContext'
import "../style.css"
function Header({cart}) {
  const {products}=useShop()
  return (
    <div className='menu'>
        <Link className='logo' to="/">Reactifay</Link>
        <div className="links">
        <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>

        </div>
           
            
        
        <Link to=""><span className='cart'>
        {products.length}
            </span></Link>
         
    </div>
  )
}

export default Header