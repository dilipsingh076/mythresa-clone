import { RadioGroup,HStack,Radio} from "@chakra-ui/react"
import { useState } from "react";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { login, userdetails } from "../../Context/AuthContext/action";
import Cookies from 'js-cookie';
import React from 'react'


export const SignUp = () => {
    const dispatch = useDispatch()
    const [Data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",


    });
    function handleChange(e) {
        const { id, value } = e.target;

        setData({...Data,[id]: value})

    }


    async function handleSubmit(event) {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:3000/auth", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(Data),
            });
            let user = await res.json();
            console.log(user)
            dispatch(login(true))
            dispatch(userdetails({
                email: user.user.email,
                firstName: user.user.firstName,
                lastName: user.user.lastName,
                token: user.token
            }))
            alert(user.user.firstName, " Registered successfully");
            Cookies.set('token', user.token);
            Cookies.set('mongooseId', user.user._id)
        } catch (error) {
            alert("Please check user details ")
            console.log(error)
        }
    }
    return (
        <div className="Input" >
            <h3>CREATE AN ACCOUNT</h3>
            <p>Please enter the following information to create your account.</p>

            <form onSubmit={handleSubmit}>
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

                <input className="button" type="submit" value="REGISTER" />
                
            </form>
        </div>

    )
}
