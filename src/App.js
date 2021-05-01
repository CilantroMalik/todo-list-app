import React from 'react';
import { TodoList } from './features/todos/TodoList';
import { AddTodoForm } from './features/todos/AddTodoForm';
//import './main.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Counter /> */}
          <>
              <AddTodoForm />
              <TodoList />
          </>
      </header>
    </div>
  );
}

export default App;
