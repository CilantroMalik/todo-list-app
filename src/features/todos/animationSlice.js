import { createSlice } from "@reduxjs/toolkit";

// the initial state stores booleans that are true when the relevant animation is running and false otherwise
const initialState = {
    createTaskAnimating: false,
    cancelTaskAnimating: false
}

// create a slice with two reducers that control the animation of creating and cancelling the creation of a task, respectively
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