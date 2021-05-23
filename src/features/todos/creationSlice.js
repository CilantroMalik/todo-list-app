import { createSlice } from '@reduxjs/toolkit';

// the state only needs to hold whether the create task view is currently displaying
const initialState = {
    creation: false
}

// we create a slice that contains a single reducer to control the creating state
const creationSlice = createSlice({
    name: 'creation',
    initialState,
    reducers: {
        toggleCreating(state, action) {
            state.creation = action.payload
        }
    }
})

export const { toggleCreating } = creationSlice.actions

export default creationSlice.reducer