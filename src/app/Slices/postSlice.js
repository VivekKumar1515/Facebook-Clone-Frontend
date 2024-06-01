import { createSlice } from "@reduxjs/toolkit";



const postSlice = createSlice({
    name: "posts",
    initialState: {
        value: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.value.unshift(action.payload)
        },

        getAllPosts: (state, action) => {
            state.value = action.payload
            state.value.reverse();
        }
    }
})

export const {addPost, getAllPosts} = postSlice.actions;
export default postSlice.reducer;