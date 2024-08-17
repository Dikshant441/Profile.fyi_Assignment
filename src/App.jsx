import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import About from "./Components/About";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Checkout from "./Components/CheckOut";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <Error />,
  },
]);
