import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// JS object that hold an application's global state, action, and reducers
export const appStore = configureStore({

  reducer: {
    cart: cartReducer,
  },
});
