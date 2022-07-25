import React, { useState } from 'react';
import "./style.js";
import List from '../list/List';
import { Button, FormStyled, Label, Input } from './style.js';

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 0, 
      title: '개인과제', 
      body: '스스로 개인과제 완성하기', 
      isDone: false
    }
  ])
  
  const onChangeHandlerTitle = (event) => {
    const inputTitle = event.target.value;
    setTitle(inputTitle);
    // console.log(inputTitle);
  }

  const onChangeHandlerBody = (event) => {
    const inputBody = event.target.value;
    setBody(inputBody);
    // console.log(inputBody);
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, {
      id: todos.length,
      title: title,
      body: body,
      isDone: false,
    }]);
    setTitle("");
    setBody("");
  }

  return (
    <div className='form-container'>
      <FormStyled>
        <Label>제목</Label>
        <Input type="text" onChange={onChangeHandlerTitle} value={title}></Input>
        <Label>내용</Label>
        <Input type="text" onChange={onChangeHandlerBody} value={body}></Input>
        <Button onClick={onClickHandler}>추가하기</Button>
      </FormStyled>
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Form;
