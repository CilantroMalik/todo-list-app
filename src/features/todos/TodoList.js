import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TodoList.module.css'

export const TodoList = () => {
    const todos = useSelector(state => state.todos)

    const renderedTodos = todos.map(todoItem => (
        <article className={styles.item} key={todoItem.id}>
            <h3>{todoItem.title}</h3>
            <p>{todoItem.desc}</p>
        </article>
    ))

    return (
        <section>
            <h2>Task List</h2>
            {renderedTodos}
        </section>
    )
}