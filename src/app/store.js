import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './../components/counters/CounterSlice';

const store=configureStore({
    reducer:{
        counters:counterSlice 
    }
})

export default store


