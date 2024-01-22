import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodo, removeCompleted } from '../redux/actions';

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const todoNum = useSelector((state) => state.todos);

  const listNumber = todoNum.filter(todo => todo.completed === false).length

  return (
    <div className="flex flex-col">
      <div className="flex ss:justify-between justify-center p-5">
        <p className="ss:block hidden font-comic text-[14px]">
          {listNumber} {listNumber > 1 ? "items left" : "item left"}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => dispatch(filterTodo("All"))}
            className={`${currentFilter === "All" ? "activeBtn" : ""} font-comic font-bold text-[14px] hover:text-[#4068f9]`}
          > 
            All
          </button>
          <button 
            onClick={() => dispatch(filterTodo("Incomplete"))}
            className={`${currentFilter === "Incomplete" ? "activeBtn" : ""} font-comic font-bold text-[14px] hover:text-[#4068f9]`}
          > 
            Incomplete 
          </button>
          <button 
            onClick={() => dispatch(filterTodo("Completed"))}
            className={`${currentFilter === "Completed" ? "activeBtn" : ""} font-comic font-bold text-[14px] hover:text-[#4068f9]`}
          > 
            Completed
          </button>
        </div>
        <button 
          onClick={() => dispatch(removeCompleted())}
          className="ss:block hidden font-comic text-[14px] hover:text-[#4068f9]"
        >
          Clear Completed
        </button>
      </div>

      <div className="ss:hidden flex justify-between items-center px-4 py-2">
        <p className="font-comic text-[14px]">
          {listNumber} {listNumber > 1 ? "items left" : "item left"}
        </p>
        <button 
          onClick={() => dispatch(removeCompleted())}
          className="font-comic text-[14px] hover:text-[#4068f9] font-[700]"
        >
          Clear Completed
        </button>
      </div>
      
    </div>
    
    
  )
}

export default FilterButton