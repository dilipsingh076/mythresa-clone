import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AppContext";
// import style from "./SingleProductCard.module.css";

export const SingleProductCard = ({
  id,
  name,
  handleAddToCartProduct,
  price,
  brandName,
  images
}) => {
  const { isAuth, handleQuiCkBuy } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (isAuth.auth) {
      navigate("/Cart");
      handleAddToCartProduct(id);
    } else {
      navigate("/Cart");
    }
  };

  const handleBuyNow = () => {
    if (isAuth.auth) {
      const payload = {
        id,
        name,
        price,
      
        brandName,
        images
      };
      handleQuiCkBuy(payload);

      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  const handheVisitSingleProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    // className={style.main}
    <div >
      <div onClick={handheVisitSingleProduct}>
        <img src={images} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <b>Price: {price}</b>
        <p>brandName : {brandName}</p>
        {/* className={style.cartBtn} */}
        <button onClick={handleAddToCart}>
          Add To cart
        </button>
        {/* className={style.buyBtn} */}
        <button onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

// id: 2
// title: "Mens Casual Premium Slim Fit T-Shirts "
// price: 22.3
// description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
// category: "men's clothing"
// image:
