import React, { useEffect } from "react";
import Header from "../components/Header";
import CartList from "../components/CartList";
import cartFetch from "../libs/CartFetch";
import removeFetch from "../libs/RemoveFetch";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  useEffect(() => {
    cartFetch()
      .then((result) => setCart(result))
      .catch((error) => {});
  }, []);
  const handleRemove = (id) => {
    removeFetch()
      .then((result) => {
        const filteredCart = cart.filter((product) => product.id !== id);
        setCart(filteredCart);
        toast.success("Product removed");
      })
      .catch((error) => toast.error("Something went wrong"));
  };
  return (
    <div>
      <Header />
      <CartList cart={cart} handleRemove={handleRemove} />
    </div>
  );
};

export default Cart;
