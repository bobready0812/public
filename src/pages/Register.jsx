import React, {useState}from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';

  

   const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/register", {
        ...values,
      }, {
        withCredentials:true,
      });
      console.log(data);
      if(data) {
        if(data.errors) {
          const {email,password} = data.errors;
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
    <>
    <div className='container'>
        <h2>Register Account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" placeholder='Email' onChange={(e) => {setValues({...values,[e.target.name]:e.target.value})}}/>
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <input type="password" name="password" placeholder='Password' onChange={(e)=>{setValues({...values,[e.target.name]:e.target.value})} }/>
          </div>
        <button type="submit">Submit</button>
        <span>
            Already have an account? <Link to="/login">Login</Link>
        </span>
        
        </form>
      
    </div>
    <ToastContainer />
    </>
  )
}
