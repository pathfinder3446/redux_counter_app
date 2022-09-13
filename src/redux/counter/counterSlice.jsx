import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        
        decrement: (state) => {
            state.value -= 1;
        },

        reset: (state) => {
            state.value = 0;
        },

        byAmount: (state, action) => {
            state.value += Number(action.payload);
        }
}})

export const { increment, decrement, reset, byAmount } = counterSlice.actions;
// export const { decrement } = counterSlice.actions;
// export const { decrement } = counterSlice.actions;
export default counterSlice.reducer;