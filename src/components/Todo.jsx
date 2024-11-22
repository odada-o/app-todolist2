"use client"

import React, { useState } from 'react'
import TodoHd from './TodoHd'
import TodoEditor from './TodoEditor'
import TodoList from './TodoList'
import { mockTodoData } from '@/data/todoData'

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoData)

  // 마운트 시 
  useEffect(() => {
    // 로컬스토리지에서 데이터를 가져와서 
    const savedTodos = JSON.parse(localStorage.getItem('todos') || [])
    // todos 상태에 저장
    setTodos(savedTodos)
  }, [])

  // todos 업데이트 시
  useEffect(() => {
    // 로컬스토리지에 데이터를 저장
  }, [todos])
  

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString()
    }
    setTodos([newTodo, ...todos])
  }

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      })
    )
  }

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='flex flex-col gap-4 p-8 pb-40'>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Todo