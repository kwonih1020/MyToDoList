import React, { useState } from 'react';
import styled from "styled-components";
import "./style.css";
import Layout from '../layout/Layout';

function Header() {
  return (
    <div className='header_container'>
      <div>My Todo List</div>
      <div>React</div>
    </div>
  )
}

export default Header;
