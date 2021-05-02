import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { todoAdded } from "./todosSlice";
import { toggleCreating } from "./creationSlice";
import styles from './TodoList.module.css'
import '../../main.css'

export const AddTodoForm = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const animation = useSelector(state => state.animation.createTaskAnimating)

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)

    const onCreateTaskClicked = () => {
        if (title && desc) {
            dispatch(todoAdded({id: nanoid(), title, desc, done: false}))
            dispatch(toggleCreating(false))
            setTitle('')
            setDesc('')
        }
    }

    return (
        <section className={animation ? styles.animation : ""}>
            <h2>Add New Task</h2>
            <form>
                <label htmlFor="taskTitle">Task:</label>
                <input type="text" id="taskTitle" name="taskTitle" value={title} onChange={onTitleChanged} placeholder="Task Title"/>
                <label htmlFor="taskDesc">Description:</label>
                <textarea id="taskDesc" name="taskDesc" value={desc} onChange={onDescChanged} placeholder="Task Description"/>
                <button type="button" onClick={onCreateTaskClicked}>Create Task</button>
            </form>
        </section>
    )
}