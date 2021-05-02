import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TodoList.module.css'
import { toggleCreating } from "./creationSlice";
import { todoCompleted } from './todosSlice';
import { animateCreateTask } from "./animationSlice";
import '../../main.css';

export const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const creation = useSelector(state => state.creation)

    const dispatch = useDispatch()

    const createTaskClicked = () => {
        dispatch(animateCreateTask(true))
        dispatch(toggleCreating(true))
    }

    const cancelClicked = () => {
        dispatch(toggleCreating(false))
    }

    const completeClicked = taskId => {
        dispatch(todoCompleted(taskId))
    }

    const renderedTodos = todos.map(todoItem => (
        <article className={todoItem.done ? styles.itemDone : styles.item} key={todoItem.id}>
            <h3 className={styles.todoTitle}>{todoItem.title}</h3>
            <p className={styles.todoDesc}>{todoItem.desc}</p>
            {console.log(todoItem)}
            {!todoItem.done && <button className='muted-button' onClick={() => {completeClicked(todoItem.id)}}>Complete</button>}
        </article>
    ))

    return (
        <section>
            { !creation.creation ? <button onClick={createTaskClicked}>Create Task</button> : <button onClick={cancelClicked}>Cancel</button>}
            <h2>Task List</h2>
            {renderedTodos}
        </section>
    )
}