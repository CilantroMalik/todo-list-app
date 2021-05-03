import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { todoAdded } from "./todosSlice";
import { toggleCreating } from "./creationSlice";
import styles from './TodoList.module.css'
import '../../main.css'
import {animateCreateTask, animateCancelTask} from "./animationSlice";

export const AddTodoForm = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [descError, setDescError] = useState(false)

    const animationAppear = useSelector(state => state.animation.createTaskAnimating)
    const animationDisappear = useSelector(state => state.animation.cancelTaskAnimating)

    const dispatch = useDispatch()

    const onTitleChanged = e => { setTitle(e.target.value); setTitleError(false) }
    const onDescChanged = e => { setDesc(e.target.value); setDescError(false) }

    const onCreateTaskClicked = () => {
        if (title && desc) {
            dispatch(todoAdded({id: nanoid(), title, desc, done: false}))
            dispatch(animateCancelTask(true))
            setTimeout(() => dispatch(toggleCreating(false)), 375)
            setTitle('')
            setDesc('')
        } else {
            if (!title) { setTitleError(true) }
            if (!desc) { setDescError(true) }
        }
    }

    const onCancelClicked = () => {
        dispatch(animateCancelTask(true))
        setTimeout(() => dispatch(toggleCreating(false)), 375)
        setTitle('')
        setDesc('')
    }

    return (
        <section className={animationAppear ? styles.animation_appearUp : (animationDisappear ? styles.animation_disappearDown : "")}
        onAnimationEnd={() => {if (animationAppear) {dispatch(animateCreateTask(false))} if (animationDisappear) {dispatch(animateCancelTask(false))}}}>
            <h2>Add New Task</h2>
            <form>
                <label htmlFor="taskTitle">Task:</label>
                <input type="text" id="taskTitle" name="taskTitle" className={titleError ? "has-error" : ""} value={title} onChange={onTitleChanged} placeholder="Task Title"/>
                <label htmlFor="taskDesc">Description:</label>
                <textarea id="taskDesc" name="taskDesc" className={descError ? "has-error" : ""} value={desc} onChange={onDescChanged} placeholder="Task Description"/>
                <hr style={{marginTop: 25}}/>
                <button type="button" onClick={onCreateTaskClicked} style={{marginRight: 10}}>Create Task</button>
                <button type="button" className='muted-button' onClick={onCancelClicked}>Cancel</button>
            </form>
        </section>
    )
}