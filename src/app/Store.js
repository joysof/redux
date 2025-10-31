import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counters/CounterSlice.js'
const store = configureStore({
    reducer : {
        counters : counterReducer
    }
})


export default store