import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'


function App() {
  const [cart,setCart]=useState(9)

  return (
  <div className="container">
     <Header cart={cart} setCart={setCart} />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/cart" element={<Cart setCart={setCart} />}></Route>
    </Routes>
   
  </div>
    
  )
}

export default App
