import { createSlice } from "@reduxjs/toolkit";

// defining initial state;
const initialState = {
  count: 0,
};

// creating slice
const counterSlice = createSlice({
  name: "counter", // must add a name for indentifing
  initialState, // initial value
  reducers: {
    increment: (state) => {
      state.count +=1;
    },
    decrement:(state) =>{
      state.count-=1;
    },
    incrementByValue:(state,actions)=>{
      state.count +=actions.payload;
    }
  },
});
export const { increment,decrement,incrementByValue } = counterSlice.actions

export default counterSlice.reducer;
