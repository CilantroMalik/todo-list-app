import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TodoList.module.css'
import { toggleCreating } from "./creationSlice";
import { todoCompleted } from './todosSlice';
import { animateCreateTask, animateCancelTask } from "./animationSlice";
import '../../main.css';

export const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const creation = useSelector(state => state.creation)

    const dispatch = useDispatch()

    // handler for creating a new task: trigger the animation and switch to the creating view
    const createTaskClicked = () => {
        dispatch(animateCreateTask(true))
        dispatch(toggleCreating(true))
    }

    // handler for cancelling task creation: trigger the corresponding animation and remove the creating view
    const cancelClicked = () => {
        dispatch(animateCancelTask(true))
        dispatch(toggleCreating(false))
    }

    // handler for completing a task: trigger the corresponding task ID's completion toggle
    const completeClicked = taskId => {
        dispatch(todoCompleted(taskId))
    }

    // create the HTML elements for each to do item, creating a column layout with different styles depending on whether
    // the task is completed or not; also have a button to complete the task or an indicator that it is complete
    const renderedTodos = todos.map(todoItem => (
        <div style={{breakInside: 'avoid-column'}}>
            <article className={todoItem.done ? styles.itemDone : styles.item} key={todoItem.id}>
                <h3 className={styles.todoTitle}>{todoItem.title}</h3>
                <p className={styles.todoDesc}>{todoItem.desc}</p>
                {!todoItem.done ? <button className='muted-button' onClick={() => {completeClicked(todoItem.id)}}>Complete</button>
                : <button disabled className='accent-button'>Completed!</button>}
            </article>
        </div>
    ))

    // simply return a section that fades in on rendering, and that either shows the create or cancel button as well as
    // the list of to do items in the columnar layout
    return (
        <section className={styles.fadeInElement}>
            { !creation.creation ? <button onClick={createTaskClicked}>Create Task</button> : <button onClick={cancelClicked}>Cancel</button>}
            <h2>Task List</h2>
            <div style={{columnCount: Math.ceil(renderedTodos.length/3)}}>{renderedTodos}</div>
        </section>
    )
}