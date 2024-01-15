// importing redux store for creating redux store
import {configureStore} from '@reduxjs/toolkit'

// importing counter reducer that is inside features > counter
import counterReducer from "./features/counter/counterSlice"
// creating template for store
const store = configureStore({
    reducer:{
        counter : counterReducer,
    },

});

export default store;