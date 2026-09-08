import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:'cartSlice',
    initialState : {
        items : []
    },
    reducers:{
        addItem : (state, action) =>{
            // mutating state here 
            state.items.push(action.payload)
        },
        removeItem :(state, action) =>{
            state.items.pop()
        },
        clearItem : (state)  =>{
            state.items.length = 0
        }
    }
})

export const {addItem, removeItem, clearItem} = cardSlice.actions
export default cardSlice.reducer;