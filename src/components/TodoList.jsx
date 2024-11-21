import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ mockTodoData }) => {
  return (
    <div>
        <h2>할 일 목록</h2>
        <ul>
          {mockTodoData.map((item) => (
            console.log(item),
            <TodoItem key={item.id} isDone={item.isDone} task={item.task} createDate={item.createDate} />
          )
        )}
          
        </ul>
      </div>
  )
}

export default TodoList