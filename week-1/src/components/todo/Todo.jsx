import React from 'react';
import { ButtonBox, Button, TodoContainer } from './style.js';

function Todo({todo, setTodos, onDeleteHanlder, onCompleteHandler}) {
  const cancelClick = () => {
    if(todo.isDone) {
      return "취소"
    } else {
      return "완료"
    }
  }
  return (
    <TodoContainer>
      <h2>{todo.title}</h2>
      <div>{todo.body}</div>
      <ButtonBox>
        <Button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</Button>
        <Button onClick={() => onCompleteHandler(todo.id)}>{cancelClick()}</Button>
      </ButtonBox>
    </TodoContainer>
  )
}

export default Todo;
