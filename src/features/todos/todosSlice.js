import { createSlice } from '@reduxjs/toolkit';

// for the testing build, start off with two placeholder tasks
const initialState = [
    { id: '1', title: 'Learn React-Redux', desc: 'just do it already', done: false},
    { id: '2', title: 'Build this app', desc: 'come on, do it now', done: false},
]

// create a slice to handle to do item creation and completion
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {  // add an item: simply push it to our state, the list of all items
            state.push(action.payload)
        },
        todoCompleted(state, action) {  // complete an item: set the done field of the relevant item to true
            state[state.findIndex(x => x.id === action.payload)].done = true
        }
    }
})

export const { todoAdded, todoCompleted } = todosSlice.actions

export default todosSlice.reducer