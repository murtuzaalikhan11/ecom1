import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' 
import { GlobalState } from '../../../../../Globalstate'
import { Link } from 'react-router-dom'
import "./detailproducts.css"

const Detailproducts = () => { 
  const params=useParams() 
  const state=useContext(GlobalState) 
  const [products] = state.productsAPI.products

  const [detailproducts,setdetailproducts]=useState([]) 

  useEffect(()=> 
  { 
    if(params){ 
      products.forEach(product  => {
                if(product._id===params.id){ 
                  setdetailproducts(product)
                }     
      })
    }
  },[params,products]) 
  console.log(detailproducts); 

  if(detailproducts.length===0) return null
  
  
  return (
    <div className='imagecard'> 
      <img src={detailproducts.images.url} alt=''/>
      <div> 
        <h2>{detailproducts.title}</h2>  
        <h2>{detailproducts.content}</h2>
        <span>${detailproducts.price}</span> 
        <p>{detailproducts.description}</p> 
      </div> 
      
    </div> 
  )
}

export default Detailproducts