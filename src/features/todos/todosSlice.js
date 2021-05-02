import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Learn React-Redux', desc: 'just do it already', done: false},
    { id: '2', title: 'Build this app', desc: 'come on, do it now', done: false},
]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.push(action.payload)
        },
        todoCompleted(state, action) {
            state[state.findIndex(x => x.id === action.payload)].done = true
        }
    }
})

export const { todoAdded, todoCompleted } = todosSlice.actions

export default todosSlice.reducer