// eslint-disable-next-line

import React, { useState } from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import LayoutContainer from './style.js';

const Layout = () => {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });

  const [todos, setTodos] = useState([
    {
      id: Math.random().toString(36).substring(2, 12), 
      title: '개인과제', 
      body: '스스로 개인과제 완성하기', 
      isDone: false
    },
    {
      id: Math.random().toString(36).substring(2, 12), 
      title: '예방접종', 
      body: '아기 데리고 병원가지', 
      isDone: true
    }
  ]);

  const { title, body } = inputs;

  const onChangeHandlerInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: Math.random().toString(36).substring(2, 12),
      title: title,
      body: body,
      isDone: false,
    }]);
    console.log(todos);
    setInputs({
      title: '',
      body: ''
    });
  };

  return (
    <LayoutContainer>
      <Header />
      <Form onChangeHandlerInput={onChangeHandlerInput} onClickHandler={onClickHandler} todos={todos} setTodos={setTodos} title={title} body={body} />
      <List todos={todos} setTodos={setTodos} />
    </LayoutContainer>
  );
}

export default Layout;
