import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 
    </ShopProvider>
   
  </StrictMode>,
)
 