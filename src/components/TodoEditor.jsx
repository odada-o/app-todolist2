"use client"

import classNames from 'classnames'
import React, { useState } from 'react'

const TodoEditor = ({addTodo}) => {
  const [task, setTask] = useState("")

  const onChangeTask = (e) => {setTask(e.target.value)}
  const onSubmit = () => {addTodo(task); setTask("")}

  return (
    <div>
        <h2>새로운 Todo 작성하기</h2>
        <div>
          <input type="text" value={task} onChange={onChangeTask} placeholder="할 일을 입력하세요." className='p-3 text-black' />
          <button 
            onClick={onSubmit} 
            disabled={!task} 
            className={
            classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')
            }>할 일 추가</button>
        </div>
      </div>
  )
}

export default TodoEditor