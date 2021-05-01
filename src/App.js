import React from 'react';
import { TodoList } from './features/todos/TodoList';
//import './main.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Counter /> */}
          <TodoList />
      </header>
    </div>
  );
}

export default App;
