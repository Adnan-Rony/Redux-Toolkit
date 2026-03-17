import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './../components/counters/CounterSlice';
import todoSlice from './../components/todoSlice/todoSlice';

const store=configureStore({
    reducer:{
        counters:counterSlice ,
        todos:todoSlice
    }
})

export default store


