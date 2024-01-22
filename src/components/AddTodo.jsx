import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';


const AddTodo = ({ currentTheme }) => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text))
  };

  const handleSubmitAddTodo = () => {
    if(newTodo.trim() !== "") {
      handleAddTodo(newTodo.trim());
      setNewTodo()
    }
  }
  
  return (
    <form onSubmit={handleSubmitAddTodo}>
      <input 
        type="text" 
        value={newTodo}
        placeholder="Create new Todo..." 
        className={`font-comic w-full p-5 rounded-lg focus:outline-none ${!currentTheme ? "bg-white" : "bg-gray-800 text-white"} transition ease-in-out duration-[.2s]`}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  )
}

export default AddTodo