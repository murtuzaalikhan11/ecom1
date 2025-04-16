import React, { useContext } from 'react'
import { MdMenu } from "react-icons/md";  
import { IoMdClose } from "react-icons/io"; 
import { IoCart } from "react-icons/io5";
import {Link} from "react-router-dom"  
import "./header.css"
import { GlobalState } from '../../Globalstate'; 
import axios from 'axios';
const Header = () => { 
    const state=useContext(GlobalState) 
    const [islogged, setIslogged] =state.userAPI.islogged 
    const [isAdmin,setIsAdmin]=state.userAPI.isAdmin 
    const [cart]=state.userAPI.cart 

 

    const logoutuser = async() => {
        await axios.post("/user/logout")

        localStorage.clear()
        setIsAdmin(false)
        setIslogged(false)
    }

    const adminRouter = ()=>{
        return(
            <>
            <li><Link to='/create_product'>Create Product</Link></li>
            <li><Link to='/category'>Categories </Link></li>
            </>
        )
    }

    const loggedRouter = ()=>{
        return(
            <>
            <li><Link to='/history'>History</Link></li>
            <li><Link to='/' onClick={logoutuser}>Logout</Link></li>
            </>
        )
    }
  return (
    <div> 
        <header> 
            <div className='menu'> 
            <MdMenu size={30}/>
            </div> 
            <div className='logo'> 
                <h1> 
                    <Link to="/">{isAdmin?'Admin':'web hub'}</Link>
                </h1>
            </div> 
         <ul> 
            <li> 
                <Link to="/">{isAdmin?'Products':'shop'}</Link> 
                 
                 {isAdmin && adminRouter() } 
                 { 
                    
                        islogged ? loggedRouter() : <li><Link to="/login">Login or Register</Link></li>
                      
                      
                 }

            </li> 
            <li> 
            <IoMdClose />
            </li>
            </ul>  
                {
                isAdmin ?"": <div className='cart-icon'> 
                <span>{cart.length }</span> 
            <Link><IoCart  size={30} /></Link> 
                
            </div> 
}
          
        </header>
    </div>
  )
}

export default Header