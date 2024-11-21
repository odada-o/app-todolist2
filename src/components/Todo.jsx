import React from 'react'

const Todo = () => {
  return (
    <div>
      <div>
        <h2>2024.04.22</h2>
        <p>오늘 할 일을 적어보세요.</p>
      </div>
      <div>
        <h2>새로운 Todo 작성하기</h2>
        <div>
          <input type="text" placeholder="할 일을 입력하세요." />
          <button>할 일 추가</button>
        </div>
      </div>
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
    </div>
  )
}

export default Todo