import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Form from '../form/Form';

function Layout() {
  const Layout = styled.div `
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  `
  return (
    <Layout>
      <Header />
      <Form />
    </Layout>
  )
}

export default Layout;
