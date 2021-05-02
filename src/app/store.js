import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import creationReducer from '../features/todos/creationSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    creation: creationReducer
  },
  devTools: true
});
