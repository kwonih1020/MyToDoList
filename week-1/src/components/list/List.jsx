// eslint-disable-next-line

import React from 'react';
import { ListBox1, ListBox2, ListContainer } from './style.js';
import Todo from '../todo/Todo';

const List = ( { todos, setTodos } ) => {

  const onDeleteHanlder = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id );
    setTodos(newTodos);
  };

  const onCompleteHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, isDone: !todo.isDone};
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <ListContainer>
      <h1 className='list-title'>Working!</h1>
      <ListBox1>
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onCompleteHandler={onCompleteHandler} />
            )
          } else {
            return null;
          }
        })}
      </ListBox1>
      <h1 className='list-title'>Done!</h1>
      <ListBox2>
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onCompleteHandler={onCompleteHandler} />
            );
          } else {
            return null;
          }
        })}
      </ListBox2>
    </ListContainer>
  )
}

export default List;
