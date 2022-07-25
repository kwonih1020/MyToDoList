import React from 'react';
import "./style.js";
import { ListBox1, ListBox2, ListContainer } from './style.js';
import Todo from '../todo/Todo.jsx';

function List({todos, setTodos}) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
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
          if(!todo.isDone) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler} />
            )
          } else {
            return null;
          }
        })}
      </ListBox1>
      <h1 className='list-title'>Done!</h1>
      <ListBox2>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} onDeleteHanlder={onDeleteHanlder} onEditHandler={onEditHandler} />
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
