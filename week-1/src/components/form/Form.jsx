// eslint-disable-next-line

import React from 'react';
import "./style.js";
import { Button, FormStyled, Label, Input } from './style.js';

const Form = ( {onChangeHandlerTitle, title, onChangeHandlerBody, body, onClickHandler} ) => {

  return (
    <div className='form-container'>
      <FormStyled>
        <Label>제목</Label>
        <Input type="text" onChange={onChangeHandlerTitle} value={title}></Input>
        <Label>내용</Label>
        <Input type="text" onChange={onChangeHandlerBody} value={body}></Input>
        <Button onClick={onClickHandler}>추가하기</Button>
      </FormStyled>
    </div>
  )
}

export default Form;
