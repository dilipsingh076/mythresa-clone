// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Navbar/Header';
import Web from './Components/Navbar/Web';
import {BrowserRouter as Routes,Route} from "react-router-dom"
import { Cart } from './Components/Cart/Cart';
function App() {
  return (
    <div className="App">
     <Header/>
     <Web/>
     
     {/* <Switch> */}
     {/* <Route> */}
     {/* <Route path="/" exact component={Men} /> */}
          {/* <Route path="/men" component={Men} />
          <Route path="/women" component={Womens} />
          <Route path="/products" component={ProductListing} /> */}
          {/* <Routes path="/cart" component={Cart} /> */}
          {/* <Route path="/product/:productId" component={ProductDetails} /> */}
          {/* <Route path="/login" component={Login_Signup} /> */}
          {/* <Route path="/shipping" component={Shipping} />  */}
          {/* <Route path="/thankyou" component={ThankYou} />  */}
          {/* <Route>404 Not Found!</Route> */}
          {/* </Route> */}
     {/* </Switch> */}

    
    <Footer/>
    </div>
  );
}

export default App;
