import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Learn React-Redux', desc: 'just do it already'},
    { id: '2', title: 'Build this app', desc: 'come on, do it now'},
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { todoAdded } = todosSlice.actions

export default todosSlice.reducer