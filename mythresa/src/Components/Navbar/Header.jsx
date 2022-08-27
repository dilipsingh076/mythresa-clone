import React from "react";
import { NavLink } from "react-router-dom";

import './Header.css';

const link = [
    {
        path : "/",
        title : "Home"
    },
    {
        path : "/women",
        title : "women"
    },
    {
        path : "/men",
        title : "men"
    },
    {
        path : "/kids",
        title : "kids"
    },
    {
        path : "/Login_Signup",
        title : "Login"
    },
    {
        path : "/"
    }
]




function Header() {
    // const nav = [
    //     { title: "WOMEN", to: "/women" },
    //     { title: "MEN", to: "/men" },
    //     { title: "KIDS", to: "/kids" },
    //     { title: "login", to: "/Login_Signup" },

    // ];
//     <a style={{ "margin": "10px", "color": "black", "curser": "pointer", "textAlign": "center" }} key={i} href={e.to} >
//     {e.title}
// </a>
    return (
        <div className='box' >
            <div className='head'>
                <div className='pages'>
                    {link.map((el)=>(<NavLink key = {el.path} to={el.path} > {el.title} </NavLink>))}
                </div>
                <div className='info'>
                
                    <a>Signup for Newsletter</a>
                    <button  onClick={() => { window.location.href = "/Login_Signup" }} >My Account</button>
                    <a>My wishlist</a>
                    <i className="fi fi-rr-heart" ></i>
                    <a>Malaysia | English</a>
                </div>

            </div >
            <div className='div'>
                <img className='img' src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220503T161145' alt="image" />
                <p className='cart-pointer' onClick={() => { window.location.href = "/cart" }}>SHOPPING BAG</p><i style={{ marginTop: "0px", marginLeft: "10px", marginRight: "40px" }} className="fi fi-rr-shopping-bag"></i>
            </div>
        </div>

    )
}
export default Header