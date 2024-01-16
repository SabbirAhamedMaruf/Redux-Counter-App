// importing redux store for creating redux store
import {configureStore} from '@reduxjs/toolkit'

// importing counter reducer that is inside features > counter
import counterReducer from "./features/counter/counterSlice"

// importing redux logger for testing middleware. this package is use to monitor redux action on console
//! import logger from "redux-logger";

// my custom logger

import customLogger from "./middlewares/Logger"


// creating template for store
const store = configureStore({
    reducer:{
        counter : counterReducer,
    },
    // MODULE 2 : Middleware
    // get defaultmiddleware is some function of redux 
    // middleware : (getDefaultMiddlware)=>getDefaultMiddlware().concat(logger) // testing loggin with package redux logger
    middleware : (getDefaultMiddlware)=>getDefaultMiddlware().concat(customLogger) // testing logging by custom logging function

});

export default store;