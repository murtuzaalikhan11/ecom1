import React from 'react'
import { Link } from 'react-router-dom'  
import { useContext } from 'react' 
import { GlobalState } from '../../../../../Globalstate' 
import BtnRender from './BtnRender'
import "./productlist.css"

const ProductList = ({product,isAdmin}) => { 

  
  return ( 
  
    <div className='product_card'>
    <div id='product_card img'>  
      { 
        isAdmin && <input type='checkbox' checked={product.checked}/>

      }
    <img src={product.images.url} alt=''/> 
    
    <div className='product_box'> 
        <h2 title={product.title}>{product.title}</h2>  
        <span>${product.price}</span> 
        <h2>{product.description}</h2>

    </div>
    <BtnRender product={product}/>
    </div>  
  
    </div>
  )
}

export default ProductList