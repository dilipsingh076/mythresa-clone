import React from 'react'
import { useState } from "react";
import "./Signup.css";
import {toast }from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
  
   const [input, setinput] = useState({

      email: "",
      password: "",


   });
   const [data, setdata] = useState([])

   const navigate = useNavigate();
   function handleChange(e) {
      const { id, value } = e.target;

      setinput(() => {
         return {
            ...input,
            [id]: value
         }
      })
}


   const handlelogin =  (e) => {
      e.preventDefault();

      const getuserArr = localStorage.getItem("useryoutube");
        // console.log(getuserArr);

        const { email, password } = input;
        if (email === "") {
            toast.error('Email Field Is Requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Plz Enter Valid Email Addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password Field Is Requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password Length Greater Five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    alert("user login succesfulyy");
                    navigate("/")
                    toast.error('Login Successfull', {
                        position: "top-center",
                    });

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                }
            }
        }



      
   };



   return (
      <div className="Input">
         <h3>ALREADY REGISTERED?</h3>
         <p>If you have an account with us, please log in.</p>

         <form >


            <input id="email" className='login_reg' onChange={handleChange} placeholder="Email" type="email" required />
            <br />
            <input id="password" className='login_reg' onChange={handleChange} placeholder="Password" type="password" required />
            <br />
            <p>*Required fields</p>
            <p>Forgot Your Password?</p>
            <button type='submit' onClick={handlelogin} >Login</button>
            {/* <input className="button" type="submit" value="LOGIN" /> */}
            <p>
               At Mytheresa, we keep your information secure. As a result, it will be<br />
               necessary for you to log in to your account before you are able to place an <br />
               order or change the information on your account. You will be asked to log<br />
               in to complete your order even if you have already been greeted on the<br />
               website.

            </p>


         </form>

      </div>)
}