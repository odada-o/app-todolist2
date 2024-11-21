import React from 'react'

const TodoList = () => {
  return (
    <div>
        <h2>할 일 목록</h2>
        <ul>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>감자, 맛동산 캐기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>고양이 츄루주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
        </ul>
      </div>
  )
}

export default TodoList