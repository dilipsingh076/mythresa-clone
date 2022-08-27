import React, { useState } from "react";


export const AppContext = React.createContext()
export const AppContextProvider = ({ children }) => {
  //State
  const [isAuth, setIsAuth] = useState({auth: false, token: null });

  const [cart, setCart] = useState([]);
  const [quickBuy, setQuickBuy] = useState([]);
  const [productData, setProductData] = useState([]);

  const handleLogin = (token) => {
    console.log("I am running");
    setIsAuth({ auth: true, token: token });
    alert("Logged in seccessfully");
  };

  const addCartContext = (data) => {
    const obj = data[0];
    let flag = true;
    cart.map((el) => {
      if (el.id === obj.id) {
        flag = false;
      }
    });

    if (flag) {
      alert("Item added to cart");
      setCart([...cart, obj]);
    } else {
      alert("It is already added in cart");
    }
  };

  const handleQuiCkBuy = (data) => {
    setQuickBuy([data]);
  };

  const handleQuiCkBuyReset = () => {
    setQuickBuy([]);
  };

  const handleAddProductData = (data) => {
    setProductData(data);
  };

  return (
    <AppContext.Provider
      value={{
        handleQuiCkBuyReset,
        quickBuy,
        isAuth,
        handleQuiCkBuy,
        cart,
        handleLogin,
        addCartContext,
        handleAddProductData,
        productData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
