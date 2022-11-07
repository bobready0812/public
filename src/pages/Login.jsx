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

  const generate = (err) => {
   toast.error(err,{
     position:"bottom-right",
   })
  }

  const handleLogin = async(e) => {
   e.preventDefault();
   try {
     const { datas } = await axios.post("http://localhost:4000/login", {
       ...values,
     }, {
       withCredentials:true,
     });
     console.log(datas);
     if(datas) {
       if(datas.errors) {
         const {email,password} = datas.errors;
         if(email) generate(email);
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
        <h2>Login Account</h2>
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
