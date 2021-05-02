import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TodoList.module.css'
import { toggleCreating } from "./creationSlice";

export const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const creation = useSelector(state => state.creation)

    const dispatch = useDispatch()

    const renderedTodos = todos.map(todoItem => (
        <article className={styles.item} key={todoItem.id}>
            <h3 className={styles.todoTitle}>{todoItem.title}</h3>
            <p className={styles.todoDesc}>{todoItem.desc}</p>
        </article>
    ))

    const createTaskClicked = () => {
        dispatch(toggleCreating(true))
    }

    const cancelClicked = () => {
        dispatch(toggleCreating(false))
    }

    return (
        <section>
            { !creation.creation ? <button onClick={createTaskClicked}>Create Task</button> : <button onClick={cancelClicked}>Cancel</button>}
            <h2>Task List</h2>
            {renderedTodos}
        </section>
    )
}