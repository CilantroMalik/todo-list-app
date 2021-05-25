import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { todoAdded } from "./todosSlice";
import { toggleCreating } from "./creationSlice";
import styles from './TodoList.module.css'
import '../../main.css'
import {animateCreateTask, animateCancelTask} from "./animationSlice";

export const AddTodoForm = () => {
    const [title, setTitle] = useState('')  // controls the state for the title field
    const [desc, setDesc] = useState('')  // controls the state for the description field
    const [titleError, setTitleError] = useState(false)  // stores whether the title field has an error (toggles a red-border CSS class)
    const [descError, setDescError] = useState(false)  // stores whether the description field has an error

    const animationAppear = useSelector(state => state.animation.createTaskAnimating)  // stores the appear animation state
    const animationDisappear = useSelector(state => state.animation.cancelTaskAnimating)  // stores the disappear animation state

    const dispatch = useDispatch()

    const onTitleChanged = e => { setTitle(e.target.value); setTitleError(false) }  // update title and clear the error state
    const onDescChanged = e => { setDesc(e.target.value); setDescError(false) }  // do the same for description

    // handles a create task button click
    const onCreateTaskClicked = () => {
        if (title && desc) {  // checks if the title and description fields are non-empty
            dispatch(todoAdded({id: nanoid(), title, desc, done: false}))  // add the to do item to our store
            dispatch(animateCancelTask(true))  // and trigger the disappear animation
            setTimeout(() => dispatch(toggleCreating(false)), 375)  // after the animation is done, hide the creating view
            setTitle('')  // clear the title and description for the next time
            setDesc('')
        } else {  // if one or more fields are empty, give them the error state
            if (!title) { setTitleError(true) }
            if (!desc) { setDescError(true) }
        }
    }

    // handles a cancel task button click
    const onCancelClicked = () => {
        dispatch(animateCancelTask(true))  // trigger the disappear animation
        setTimeout(() => dispatch(toggleCreating(false)), 375)  // and hide the creating view after a delay
        setTitle('')  // also clear the title and description fields
        setDesc('')
    }

    return (  // animate the section by adding an animator class if the corresponding state is true, and then set it to false when the animation is over
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