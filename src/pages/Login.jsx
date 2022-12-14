import React, {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
   email:"", 
   password:"",
  })

  const generateError = (error) => {
   toast.error(error,{
     position:"bottom-right",
   })
  }

  const handleLogin = async(e) => {
   e.preventDefault();
   try {
     const { data } = await axios.post("http://localhost:4000/login", {
       ...values,
     }, {
       withCredentials:true,
     });
     console.log(data);
     if(data) {
       if(data.errors) {
         const {email,password} = data.errors;
         if(email) generateError(email);
         else if (password) generate(password);
       } else {
           navigate("/");

       }
     }
   } catch(err) {
     console.log(err);
   }
  }

  

  return ( 
    <div className='container'>
        <h2>Login account</h2>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder='Email' onChange={(e) => {setValues({...values,[e.target.name]:e.target.value})}}/>
            {/* 공부 */}
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
