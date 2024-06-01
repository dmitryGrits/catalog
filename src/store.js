import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";

export const store = configureStore({
    reducer: {
        productList: productReducer
    }
});