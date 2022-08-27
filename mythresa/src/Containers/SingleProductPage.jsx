import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AppContext";

export const SingleProductPage = () => {
  const [data, setData] = useState([]);

  const [loading, setLoaading] = useState(true);

  const navigate = useNavigate();

  const { productData, addCartContext, handleQuiCkBuy, isAuth } = useContext(
    AppContext
  );
  console.log(productData);

  let { id } = useParams();
  // console.log(typeof(id))
  useEffect(() => {
    let sinGleData = productData.filter((el) => {
      if (el.id === Number(id)) {
        return true;
      }
      return false;
    });
    console.log("I am running from single data");
    console.log(sinGleData);
    setData(sinGleData);
    setLoaading(false);
  }, []);

  const addToCart = () => {
    if (isAuth.auth) {
      addCartContext(data);
      navigate("/product");
    } else {
      navigate("/login");
    }
  };

  const buyNow = () => {
    if (isAuth.auth) {
      handleQuiCkBuy(data[0]);
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return <div>Loading ......</div>;
  }

  return (
    <div>
      <div>
        <img
          src={data[0].image}
          alt={data[0].title}
          width="80%"
          height="520px"
        />
      </div>
      <div>
        <h1>{data[0].title}</h1>
        <h2>{data[0].description}</h2>
      </div>
      <br />
      <br />

      <div>
        <button onClick={addToCart}>Add To cart</button>
        <button onClick={buyNow}>Buy Now</button>
      </div>
    </div>
  );
};

// id: 1
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// price: 109.95
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// category: "men's clothing"
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
