import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
// import { Provider } from 'react-redux';
import {AppContextProvider }from './Context/AuthContext/AppContext';
// import AppContextProvider from './Context/AuthContext/AppContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppContextProvider>
    {/* <Provider> */}
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    {/* </Provider> */}
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();
