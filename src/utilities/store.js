import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReduxSlice";

const appstore=configureStore({
    reducer:{
        cart: cartReducer,
    },
});

export default appstore;