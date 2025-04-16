
import React, { useState } from 'react'
import{Link} from 'react-router-dom' 
import axios from 'axios' 
import "./register.css"
const Register = () => { 

   const [user,setuser]=useState({  
      name:"",    
      email:"", 
      password:""
    })  

    
 const onchangeInput=e=> { 
  const {name,value}=e.target
  setuser({...user,[name]:value})
 }  

 const onregister= async e =>{ 
  e.preventDefault() 
  try{ 
       await axios.post("/user/register",{...user}) 

       localStorage.setItem("firstLogin",true) 
       window.location.href="/"
  } 
  catch(err) 
  { 
    alert(err.response.data.msg)
  }
 }

  
  return (
    <div> 
            <div className="login-container">
                  <form onSubmit={onregister}>  
                    <input type='text' name='name' value={user.name} required placeholder='Name' onChange={onchangeInput}/>
                  <input type='email' name='email' value={user.email} required placeholder='Email' onChange={onchangeInput}/> 
                  <input type='password' name='password' value={user.password} required placeholder='Password' onChange={onchangeInput}/> 
                  <div className="login-actions">
                    <button type='submit'>Register</button>  
                     <button> <Link to="/login">register</Link></button>
                  </div>
                  </form>
                </div>
    </div>
  )
}

export default Register