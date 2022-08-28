import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SingleProductCard } from "./SingleProductCard";
// import style from "./SingleProductCard.module.css";

import { AppContext } from "../Context/AuthContext/AppContext";
import { SimpleGrid } from "@chakra-ui/react";




export const Products = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { addCartContext, handleAddProductData } = useContext(AppContext);

  useEffect(() => {
    axios
      .get("https://dilip-api.herokuapp.com/products")
      .then((res) => {
        //console.log(res.data);
        handleAddProductData(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err)
      });
  }, []);

  //If loading true
  if (isLoading) {
    return <div>loading ........</div>;
  }

  const handleAddToCartProduct = (id) => {
    const newArr = data.filter((el) => {
      if (el.id === id) {
        return true;
      }
      return false;
    });
    addCartContext(newArr);
  };

  return (
    // className={style.parent}
    <div >
    <SimpleGrid columns={4} spacing={10} >
    {data?.map((el) => (
        <SingleProductCard
          key={el.id}
          {...el}
          handleAddToCartProduct={handleAddToCartProduct}
        />
      ))}
    </SimpleGrid>
    
    </div>
  );
};