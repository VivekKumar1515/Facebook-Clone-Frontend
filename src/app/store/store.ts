import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import postReducer from '../Slices/postSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
    },
})