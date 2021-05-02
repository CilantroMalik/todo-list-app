import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    creation: false
}

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