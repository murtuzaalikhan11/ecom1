import React, { useState } from 'react'
import{Link} from 'react-router-dom' 
import axios from 'axios' 
import "./login.css"
const LLogin = () => { 

  const [user,setuser]=useState({ 
    email:"", 
    password:""
  }) 

 const onchangeInput=e=> { 
  const {name,value}=e.target
  setuser({...user,[name]:value})
 } 

 const onlogin= async e =>{ 
  e.preventDefault() 
  try{ 
       await axios.post("/user/login",{...user}) 

       localStorage.setItem("firstLogin",true) 
       window.location.href="/"
  } 
  catch(err) 
  { 
    alert(err.response.data.msg)
  }
 }

  return (
    <div className="login-container">
      <form onSubmit={onlogin}> 
      <input type='email' name='email' value={user.email} required placeholder='Email' onChange={onchangeInput}/> 
      <input type='password' name='password' value={user.password} required placeholder='Password' onChange={onchangeInput}/> 
      <div className="login-actions">
        <button type='submit'>Login</button>  
       <button> <Link to="/register">register</Link></button>
      </div>
      </form>
    </div>
  )
}

export default LLogin