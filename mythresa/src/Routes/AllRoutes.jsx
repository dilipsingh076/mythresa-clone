import { Routes, Route } from "react-router-dom";
import { Men } from "../Components/Home/Men";
import { Womens } from "../Components/Home/Women";
import  {Login_Signup}  from "../Components/Login/Login_Signup";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/"  element = {<Men/>} /> 
            <Route path="/men" element = {<Men/>} />
            <Route path="/women" element = {<Womens/>}  />
            {/* <Route path="/products"  /> */}
            {/* <Routes path="/cart" component={Cart} /> */}
            {/* <Route path="/product/:productId"  /> */}
            <Route path="/login"  element = {<Login_Signup/>} />
            {/* <Route path="/shipping"  /> */}
            {/* <Route path="/thankyou"  /> */}
            {/* <Route>404 Not Found!</Route> */}

        </Routes>
    )
}
export default AllRoutes