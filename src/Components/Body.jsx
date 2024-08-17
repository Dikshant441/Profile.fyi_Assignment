import { useState, useEffect } from "react";
import { url, options } from "../utils/constant";
import ProductCard from "../Components/ProductCard";
import Shimmer from "./ShimmerUI";

const Body = () => {
  const [Products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setProducts(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return Products.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-24">
      <div className=" m-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Products?.map((Product) => (
          <ProductCard key={Product.id} cartData={Product} Product={Product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
