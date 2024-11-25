"use client"

import React, { useEffect, useReducer, useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'
import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer'

// 로컬 스토리지 키 선언
const LOCAL_STORAGE_KEY = "my-todo-app-todos";

const Todo = () => {
  // const [todos, setTodos] = useState([]);
  


  return (
    <div className='flex flex-col gap-4 p-8 pb-40'>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Todo