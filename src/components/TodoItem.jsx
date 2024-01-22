import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { removeCompleted, removeTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between gap-5 p-5 border-b-[1px] border-gray-300 font-comic">
      <div className="flex gap-4 items-center">
        <div>
          <button
            onClick={() => dispatch(toggleTodo(index))}
            className={`w-[25px] h-[25px] rounded-full ${todo.completed ? "gradient-blue" : "border-gray-400 border-[1px]"}  flex justify-center items-center text-[12px]`}
          >
            {todo.completed ? <FaCheck /> : ""}
          </button>
        </div>
        <div>
          <p className={`${todo.completed ? "font-[300] line-through text-[#848484]" : "font-[700]"} w-full overflow-hidden ss:text-[16px] text-[14px]`}>{todo.text}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="text-sm bg-red-500 text-white sm:px-2 px-1  py-1 rounded"
        >
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  )
}

export default TodoItem