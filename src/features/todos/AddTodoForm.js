import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { todoAdded } from "./todosSlice";
import '../../main.css'

export const AddTodoForm = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)

    const onCreateTaskClicked = () => {
        if (title && desc) {
            dispatch(
                todoAdded({id: nanoid(), title, desc})
            )
            setTitle('')
            setDesc('')
        }
    }

    return (
        <section>
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