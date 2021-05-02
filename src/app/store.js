import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import creationReducer from '../features/todos/creationSlice';
import animationReducer from '../features/todos/animationSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    creation: creationReducer,
    animation: animationReducer
  }
});
