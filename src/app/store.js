import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './../components/counters/CounterSlice';
import todoReducer from './../components/todoSlice/todoSlice';
import cartReducer from './../components/ProductCart/cartSlice';

const store=configureStore({
    reducer:{
        counters:counterSlice ,
        todos:todoReducer,
        cart: cartReducer,
    }
})

export default store


