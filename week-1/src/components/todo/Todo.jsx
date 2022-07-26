import React from 'react';
import { ButtonBox, Button, TodoContainer } from './style.js';

const Todo = ( {todo, onDeleteHanlder, onCompleteHandler} ) => {
  const cancelClick = () => {
    return (todo.isDone ? "취소" : "완료");
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
