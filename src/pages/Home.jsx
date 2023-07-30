import React, { useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import productsFetch from "../libs/ProductsFetch";
import createFetch from "../libs/CreateFetch";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    productsFetch()
      .then((result) => setProducts(result))
      .catch((error) => {});
  }, []);
  const handleCart = (id) => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      createFetch(id)
        .then((result) => toast.success("Product added to cart"))
        .catch((error) => toast.error("Something went wrong"));
    } else {
      toast.error("Please login first");
      return navigate("/login");
    }
  };
  return (
    <div>
      <Header />
      <Products products={products} handleCart={handleCart} />
    </div>
  );
};

export default Home;
