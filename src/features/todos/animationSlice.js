import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createTaskAnimating: false,
    cancelTaskAnimating: false
}

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        animateCreateTask(state, action) {
            state.createTaskAnimating = action.payload
        },
        animateCancelTask(state, action) {
            state.cancelTaskAnimating = action.payload
        }
    }
})

export const { animateCreateTask, animateCancelTask } = animationSlice.actions

export default animationSlice.reducer