import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import About from "./Components/About";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error";

const App = () => {
  return (
    <div className="mt-24">
      <Header />
      <Outlet/>
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
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
