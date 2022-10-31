import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";

export default function Login() {
   const [values, setValues] = useState({
    email:"", 
    password:"",
   })

  

  return ( 
    <div className='container'>
        <h2>Login Account</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder='Email' onChange={(e) => {setValues({...values,[e.target.value]:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input type="password" name="password" placeholder='Password' onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})} }/>
          </div>
        <button type="submit">Submit</button>
        <span>
            Already have an account? <Link to="/register">Register</Link>
        </span>
        <ToastContainer />
        </form>
    </div>
  )
}
