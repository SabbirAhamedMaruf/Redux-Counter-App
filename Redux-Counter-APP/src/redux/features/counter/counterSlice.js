import { createSlice } from "@reduxjs/toolkit";

// defining initial state;
const initialState = {
  count: 0,
  name:"test" // assigning initial value
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
    }
  },
});
export const { increment,decrement } = counterSlice.actions

export default counterSlice.reducer;
