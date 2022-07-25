import React from 'react';
import { ButtonBox, Button, TodoContainer } from './style.js';

function Todo({todo, setTodos, onDeleteHanlder, onEditHandler}) {
  return (
    <TodoContainer>
      <h2>{todo.title}</h2>
      <div>{todo.body}</div>
      <ButtonBox>
        <Button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</Button>
        <Button onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</Button>
      </ButtonBox>
    </TodoContainer>
  )
}

export default Todo;
