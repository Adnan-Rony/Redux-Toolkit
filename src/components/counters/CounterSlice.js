import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        value:0
    },
    {
        id:2,
        value:0
    }
]

const counterSlice=createSlice({
    name:"counters",
    initialState,
    reducers:{
        increment:(state,action)=>{
            const counterIndex=state.findIndex(counter=>counter.id===action.payload)
           state[counterIndex].value+=1
        
        
    },
    decrement:(state,action)=>{
        const counterIndex=state.findIndex(counter=>counter.id===action.payload)
        state[counterIndex].value-=1
    }

}
})
 
export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions 




// 🧠 🔥 6 Things You MUST Remember

// Store = global data

// Slice = state + logic

// Action = what happened

// Reducer = how state changes

// Dispatch = send action

// useSelector = get state + auto update UI
