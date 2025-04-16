import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UserAPI = (token) => { 

    const[islogged,setIslogged]=useState(false) 
    const [isAdmin,setIsAdmin]=useState(false) 
    const [cart,setcart]=useState([])

    useEffect(()=> 
    { 
        if(token) 
        { 
            const getUser=async()=>{  
                try { 
                    const res= await axios.get("/user/infor",{ 
                        headers:{Authorization: token} 
    
    
                    }) 
                    setIslogged(true) 
                    res.data.role===1? setIsAdmin(true):setIsAdmin(false)
                }
               catch(err){ 
                alert(err.response.data.msg)
               }
            } 
            getUser()
        }
    },[token]) 

    const addCart= async(product)=>{ 
        if(!islogged) return alert("please login ") 

            const check=cart.every(item=>{ 
                return item.id !==product._id
            }) 

            if(check){ 
                setcart([...cart,{...product,quantity:1}])
            }else{  
                alert("this product is already in your cart")

            }
    }
  return { 
    islogged:[islogged, setIslogged] ,
    isAdmin:[isAdmin,setIsAdmin],  
    cart:[cart,setcart],
    addCart:addCart
  }
    
  
}

export default UserAPI