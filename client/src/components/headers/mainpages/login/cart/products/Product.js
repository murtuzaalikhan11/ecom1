import React from 'react'
import { useContext } from 'react' 
import { GlobalState } from '../../../../../../Globalstate' 
import ProductList from '../../../utils/productlist/ProductList' 

const Product = () => { 
  const state=useContext(GlobalState) 
  const [products] = state.productsAPI.products 
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <div className='products'> 
    { 
      products.map(product=>{  
        
        return <ProductList key={product.id} product={product} isAdmin={isAdmin}/>
      })
    }
        
      
    </div>
  )
}

export default Product