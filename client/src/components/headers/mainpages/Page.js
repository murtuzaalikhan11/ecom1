import React from 'react'
import Product from './login/cart/products/Product'
import LLogin from './login/LLogin'
import Register from './login/Register' 
import Cart from './login/cart/Cart' 
import Detailproducts from './utils/details/Detailproducts'
import {Route,Routes} from 'react-router-dom'
const Page = () => {
  return (
    <div> 
        <Routes> 
       <Route path='/' element={<Product/>}/> 
       <Route path='/login' element={<LLogin/>}/> 
       <Route path='/register' element={<Register/>}/> 
       <Route path='/details/:id' element={<Detailproducts/>}/>
       <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Page