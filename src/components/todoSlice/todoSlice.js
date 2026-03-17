import { createSlice } from "@reduxjs/toolkit"


const initialState=[]

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push({
                id:Date.now(),
                text:action.payload,
                completed:false
            })
        },

        deletetodo:(state,action)=>{
            return state.filter(todo=>todo.id!==action.payload)
        },



        toggletodo:(state,action)=>{
            const todoIndex=state.findIndex(todo=>todo.id===action.payload)
            state[todoIndex].completed=!state[todoIndex].completed
        }
    }

})

export default todoSlice.reducer
export const {addTodo,deletetodo,toggletodo}=todoSlice.actions