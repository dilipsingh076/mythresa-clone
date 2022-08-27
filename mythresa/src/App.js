import './App.css';
import React from 'react';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Navbar/Header';
import Web from './Components/Navbar/Web';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
     <Header/>
     <Web/>
     <AllRoutes/>
     
    <Footer/>
    </div>
  );
}

export default App;
