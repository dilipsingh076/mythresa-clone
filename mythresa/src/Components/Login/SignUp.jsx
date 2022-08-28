import { RadioGroup,HStack,Radio} from "@chakra-ui/react"
import { useState } from "react";
import "./Signup.css";

import {toast} from "react-toastify"
import React from 'react'
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    // const dispatch = useDispatch()
    const navigateTowards = useNavigate()
    const [input, setinput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
       


    });

    const [data,setData] = useState([])
    console.log(input)


    function handleChange(e) {
        const { id, value } = e.target;

        setinput(()=>
       {return{...input,[id]: value}})

    }


    async function handleSubmit(event) {
        event.preventDefault();
        const { firstName,lastName, email, password} = input;

        if (firstName === "") {
            toast.error(' Name field is requred!',{
                position: "top-center",
            });
        }
       else if (lastName === "") {
            toast.error(' Name field is requred!',{
                position: "top-center",
            });
        }
         else if (email === "") {
             toast.error('Email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
           alert("Sign up succesfully");
            navigateTowards("/Login_Signup")
            localStorage.setItem("useryoutube",JSON.stringify([...data,input]));

        }

       
    }
    return (
        <div className="Input" >
            <h3>CREATE AN ACCOUNT</h3>
            <p>Please enter the following information to create your account.</p>
            {/* onSubmit={handleSubmit} */}
            <form >
                <RadioGroup>
                    <HStack spacing='24px'>
                        <Radio value='Ms.'>Ms.</Radio>
                        <Radio value='Mrs.'>Mrs.</Radio>
                        <Radio value='Mr.'>Mr.</Radio>
                       
                    </HStack>

                </RadioGroup>
                <input id="firstName" className='login_reg' onChange={handleChange} placeholder="First Name" type="text" required />
                <br />
                <input id="lastName" className='login_reg' onChange={handleChange} placeholder="Last Name" type="text" required />
                <br />
                <input id="email" className='login_reg' onChange={handleChange} placeholder="Email" type="email" required />
                <br />
                <input id="password" className='login_reg' onChange={handleChange} placeholder="Password" type="password" required />
                <br />
                <input id="Confirm_Password" className='login_reg' placeholder="Confirm Password" type="password" required />
                <br />
                <p>
                    From now on I will receive the Mytheresa Newsletter with selected <br />
                    fashion offers. If I do not wish to receive the newsletter, I can unsubscribe<br />
                    at any time free of charge at privacy@mytheresa.com.<br />
                    <br />
                    I agree that Mytheresa may insert analytical web beacons into the <br />
                    newsletter and create a personalized user profile based on my purchase <br />
                    and usage behavior, including sending a notification when I have placed <br />
                    something in the shopping cart. Further details can be found in our Privacy<br />
                    Policy, clause 5. I understand that I can revoke my consent at any time by<br />
                    emailing privacy@mytheresa.com.

                </p>
                <button onClick={handleSubmit} type={"submit"} >Submit</button>

                {/* <input className="button" type="submit" value="REGISTER" /> */}
                
            </form>
            
        </div>

    )
}
