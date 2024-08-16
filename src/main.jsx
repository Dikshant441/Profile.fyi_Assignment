import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./stote/appStore.js";
import { RouterProvider } from "react-router-dom";
import { appRoute } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRoute} />
    </Provider>
  </StrictMode>
);
