import React from 'react';
import { useSelector } from 'react-redux'
import { TodoList } from './features/todos/TodoList';
import { AddTodoForm } from './features/todos/AddTodoForm';
//import './main.css';
import './App.css'

function App() {

    const creating = useSelector(state => state.creation)

    return (
        <div className="App">
            <header className="App-header">
                { creating.creation ? <AddTodoForm /> : <TodoList />}
            </header>
        </div>
    );
}

export default App;
