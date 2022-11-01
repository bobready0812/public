import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Secret() {
  const navigate = useNavigate(); 
  const logOut = () => {
    navigate("/register"); 
  }

  return (
    
    <div className='private'>
      <h1>Super Secret Page</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}
