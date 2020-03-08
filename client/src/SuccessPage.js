import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
`;

function SuccessPage() {
  if (localStorage.getItem('ACCESS_TOKEN')) {
    return <Title id="success">Authentificated</Title>;
  }
  return <Redirect to="/" />;
}

export default SuccessPage;
