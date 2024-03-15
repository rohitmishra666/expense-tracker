import { configureStore } from "@reduxjs/toolkit";
import Transreducer from './TransSlice'

export const store = configureStore({
    reducer: Transreducer,
})
