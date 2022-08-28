import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"

import {AppContextProvider }from './Context/AuthContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppContextProvider>
   
      <BrowserRouter>
        <ChakraProvider>
        
          <App />
         
        </ChakraProvider>
      </BrowserRouter>
    
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();
