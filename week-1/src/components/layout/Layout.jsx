// eslint-disable-next-line

import React, { useState } from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import LayoutContainer from './style.js';

const Layout = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Math.random().toString(36).substring(2, 12), 
      title: '개인과제', 
      body: '스스로 개인과제 완성하기', 
      isDone: false
    }
  ]);
  
  const onChangeHandlerTitle = (e) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
    // console.log(inputTitle);
  }

  const onChangeHandlerBody = (e) => {
    const inputBody = e.target.value;
    setBody(inputBody);
    // console.log(inputBody);
  }

  console.log(title, body);

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: Math.random().toString(36).substring(2, 12),
      title: title,
      body: body,
      isDone: false,
    }]);
    console.log(todos);
    setTitle("");
    setBody("");
  }

  return (
    <LayoutContainer>
      <Header />
      <Form onChangeHandlerTitle={onChangeHandlerTitle} onChangeHandlerBody={onChangeHandlerBody} onClickHandler={onClickHandler} todos={todos} setTodos={setTodos} title={title} body={body} />
      <List todos={todos} setTodos={setTodos} />
    </LayoutContainer>
  )
}

export default Layout;
