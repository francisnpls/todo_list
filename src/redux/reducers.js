import { ADD_TODO, DARK_MODE, EDIT_TODO, FILTER_TODO, REMOVE_COMPLETED, REMOVE_TODO, TOGGLE_TODO } from './actionType';

const initialState = {
    dark: JSON.parse(localStorage.getItem("darkMode")) || false,
    todos: JSON.parse(localStorage.getItem("addTodo")) || [],
    filter: "All",
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_MODE:
            const dark = action.payload.dark;
            localStorage.setItem("darkMode", JSON.stringify(!dark));

            return {
                ...state,
                dark: !dark
            };

        case ADD_TODO:
            const newTodo = { text: action.payload.text, completed: false };
            const updatedTodosAdd = [...state.todos, newTodo];
            localStorage.setItem("addTodo", JSON.stringify(updatedTodosAdd));

            return {
                ...state,
                todos: updatedTodosAdd,
            }
        
        case FILTER_TODO:
            return {
                ...state,
                filter: action.payload.filter
            }
        
        case TOGGLE_TODO:
            const updatedTodosToggle = state.todos.map((todo, index) =>index === action.payload.id ? { ...todo, completed: !todo.completed } : todo);
            localStorage.setItem("addTodo", JSON.stringify(updatedTodosToggle));

            return {
                ...state,
                todos: updatedTodosToggle,
            }
        
        case REMOVE_TODO:
            const updatedTodosRemove = state.todos.filter((todo, index) => index !== action.payload.id);
            localStorage.setItem("addTodo", JSON.stringify(updatedTodosRemove));

            return {
                ...state,
                todos: updatedTodosRemove,
            }
        
        case EDIT_TODO:
            const { id, newText } = action.payload;
            const updatedTodosEdit = state.todos.filter((todo, index) => index === id ? { ...todo, text: newText } : todo);
            localStorage.setItem("addTodo", JSON.stringify(updatedTodosEdit));

            return {
                ...state,
                todos: updatedTodosEdit,
            }
        
        case REMOVE_COMPLETED:
            const markCompleted = state.todos.filter(todo => !todo.completed);
            localStorage.setItem("addTodo", JSON.stringify(markCompleted));

            return {
                ...state,
                todos: markCompleted,
            }
        

        default: 
            return state
    }
}


export default todoReducer;