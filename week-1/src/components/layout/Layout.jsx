import React from 'react';
import "./style.css";
import Header from '../header/Header';
import Form from '../form/Form';

function Layout() {
  return (
    <div className='layout'>
      <Header />
      <Form />
    </div>
  )
}

export default Layout;
