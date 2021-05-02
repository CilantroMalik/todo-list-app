import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createTaskAnimating: true
}

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        animateCreateTask(state, action) {
            state.createTaskAnimating = action.payload
        }
    }
})

export const { animateCreateTask } = animationSlice.actions

export default animationSlice.reducer