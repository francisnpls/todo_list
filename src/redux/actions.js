import { ADD_TODO, DARK_MODE, EDIT_TODO, FILTER_TODO, REMOVE_COMPLETED, REMOVE_TODO, TOGGLE_TODO } from "./actionType";

export const darkMode = (dark) => ({
    type: DARK_MODE,
    payload: {dark}
});

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {text}
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: {filter}
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const editTodo = (id, newText) => ({
    type: EDIT_TODO,
    payload: {id, newText}
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const removeCompleted = (id) => ({
    type: REMOVE_COMPLETED,
    payload: {id}
});

