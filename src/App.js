import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Pages/Home/Home'
import {Route,Routes} from 'react-router-dom'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
const App = () => {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
        
    </div>
  )
}

export default App