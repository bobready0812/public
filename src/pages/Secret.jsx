import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from "react-cookie";
import {ToastContainer, toast} from 'react-toastify';
import axios from "axios";

export default function Secret() {
  const navigate = useNavigate(); 
  const [cookies, setCookie, removeCookie] = useCookies([]); //공부하기
  useEffect(() => {
    const verifyUser = async () => {
      if(!cookies.jwt) {
        
        navigate("/login");

       } else {
       
          const {data} = await axios.post(
            "http://localhost:4000/",{}, {
             withCredentials:true,
            }
          );
      
           if(data.status === false) {
            removeCookie("jwt");
            navigate("/login");
          } 
          else if(data.status === "none") {
          }
         else {
            toast(`HI ${data.user}`, {theme:"dark"}); 
          }
        };
      };
      verifyUser();
    
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  }

  return (
    <>
    <div className='private'>
      <h1>Super Secret Pages</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
    <ToastContainer />
    </>
  )
}
