import { createContext, useEffect, useState } from "react"; 
import ProductAPI from "./api/ProductApi";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState=createContext() 

export const DataProvider=({children})=> 
{  

    const [token,settoken]=useState(false)  

    const refreshtoken= async()=> 
    { 
        const res= await axios.get("/user/refresh_token")  
        settoken(res.data.accesstoken)

        
    } 

    useEffect(()=> 
    { 
        const firstLogin=localStorage.getItem('firstLogin') 
        if(firstLogin)  refreshtoken()
    },[])

    const state = {
        token: [token,settoken],
        productsAPI:ProductAPI(), 
        userAPI:UserAPI(token)

    }


    return( 
        <GlobalState.Provider value={state}> 
            {children}
        </GlobalState.Provider>
    )
    }
