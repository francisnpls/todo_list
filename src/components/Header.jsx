import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkMode } from '../redux/actions';
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import AddTodo from './AddTodo';

const Header = () => {
  const currentTheme = useSelector((state) => state.dark);
  const dispatch = useDispatch()

  return (
    <header className={`sm:h-[50vh] h-[45vh] w-full flex justify-center ${!currentTheme ? "bg-light" : "bg-dark"} bg-center bg-no-repeat bg-cover`}>
      <div className="sm:w-[50%] w-[85%] ss:pt-[80px] pt-[40px] flex flex-col gap-7">
        <div className='flex justify-between items-center'>
          <h1 className="text-white font-[700] text-[40px] tracking-[15px]">
            TODO
          </h1>
          <button onClick={() => dispatch(darkMode(currentTheme))}>
            {!currentTheme ? <IoSunny className='icon' /> : <FaMoon className='icon' />}
          </button>
        </div>

        <AddTodo currentTheme = {currentTheme}/>
      </div>
      
    </header>
  )
}

export default Header