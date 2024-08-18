import { useState, useEffect } from "react";
import { url, options } from "../utils/constant";
import ProductCard from "../Components/ProductCard";
import Shimmer from "./ShimmerUI";

const Body = () => {
  const [Products, setProducts] = useState([]);

  // async retun promise to handle this use await
  const getProducts = async () => {

    // error handling in Promise using try/catch
    try {
      const response = await fetch(url, options); // response return a Promise
      const result = await response.json(); // result also return Promise and convert data into json
      // console.log(result);
      setProducts(result.data.data);
    } catch (error) { 
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // conditional rendering
  return Products.length === 0 ? (  
    <Shimmer />  // if Products in empty show dummy UI
  ) : (
    <div className="mt-24">
      <div className=" m-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {/* map help to list all Product and help to dynamic rebdering of products  */}
        {Products?.map((Product) => (
          <ProductCard key={Product.id} cartData={Product} Product={Product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
