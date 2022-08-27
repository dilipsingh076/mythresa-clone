import { Routes, Route } from "react-router-dom";
// import { Cart } from "../Components/Cart/Cart";
import { Men } from "../Components/Home/Men";
import { Womens } from "../Components/Home/Women";
// import {Login_Signup} from "../Components/Login/Login_Signup"
import Login_Signup from "../Components/Login/Login_Signup"
import { Products } from "../Containers/Product";
import { SingleProductPage } from "../Containers/SingleProductPage";
// import ProductPage from "../Containers/ProductListing";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/"  element = {<Men/>} /> 
            <Route path="/men" element = {<Men/>} />
            <Route path="/women" element = {<Womens/>}  />
            <Route path = "/product" element = {<Products/>}  />
            <Route path = "/product:id" element = {<SingleProductPage/>}  />
            
            {/* <Routes path = "/Cart" element ={<Cart/>} /> */}
            {/* <Route path="/product/:productId"  /> */}
            <Route path="/Login_Signup" element = {<Login_Signup/>} />
            {/* <Route path="/shipping"  /> */}
            {/* <Route path="/thankyou"  /> */}
            {/* <Route>404 Not Found!</Route> */}

        </Routes>
    )
}
export default AllRoutes