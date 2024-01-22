import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelectorHook } from 'react-redux';
import FilterButton from './FilterButton';
import TodoItem from './TodoItem';

const TodoList = () => {
  const currentTheme = useSelector((state) => state.dark);

  const filteredTodos = useSelector((state) => {
    const todos = state.todos
    const filter = state.filter;

    return todos.filter((todo) => {
      const matchFilter = (filter === "Completed" && todo.completed) || (filter === "Incomplete" && !todo.completed) || (filter === "All");

      return matchFilter
    })
  })

  return (
    <section className={`min-h-[50vh] h-max w-full flex justify-center relative ${!currentTheme ? "bg-gray-200" : "bg-gray-900"} transition ease-in-out duration-[.2s] pb-4`}>
      <div className="sm:w-[50%] w-[85%] relative top-[-38px]">
        <div className={`flex flex-col ${!currentTheme ? "bg-white" : "bg-gray-800 text-white"} rounded-lg transition ease-in-out duration-[.2s]`}>
          {filteredTodos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))}
          <FilterButton/>
        </div>  
      </div>
    </section>
  )
}

export default TodoList