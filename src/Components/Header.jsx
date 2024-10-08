import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // using useSelector can read the data in cartSlice 
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className=" flex flex-row md:flex-row justify-between bg-gray-200 shadow-lg fixed top-0 w-full z-[1] h-20">
      <div className="flex items-center p-2">
        <img
          className="h-24 p-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6d-OumliYWNgLj2VV6hDhDN6XOSIi2a4NA&s"
        />
      </div>
      <div className="py-2 md:py-0 flex justify-center items-center">
        <ul className="flex flex-row md:flex-row gap-x-8 mr-12">
          <li className="text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className=" text-gray-800 text-3xl hover:text-orange-500">
            <Link to="/cart" className="flex ">
              <BsCartCheckFill />
              {cart.length > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-sm font-medium text-black bg-yellow-500 rounded-full">{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
