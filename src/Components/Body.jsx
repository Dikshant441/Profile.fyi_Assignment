import { useState, useEffect } from "react";
import { url, options } from "../utils/constant";
import ProductCard from "../Components/ProductCard";

const Body = () => {
  const [Products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setProducts(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="m-4 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Products?.map((Product) => (
          <ProductCard key={Product.id} cartData={Product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
