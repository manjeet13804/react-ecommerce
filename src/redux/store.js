import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./reducers/list";
import cart from "./reducers/cart";
import shipping from "./reducers/shipping";
export default configureStore({
    reducer :{
        list : listSlice,
        cart : cart,
        shipping : shipping
    }
})