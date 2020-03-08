import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from './Form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginInput = styled(Input)`
  top: 18%;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    try {
      const params = { email: email, password: password };
      e.preventDefault();
      const res = await axios.post('http://localhost:8080/login', params);

      if (res.data.token) {
        localStorage.setItem('ACCESS_TOKEN', res.data.token);
        history.push('/success');
      }
    } catch {
      alert('Bad Authentification');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <LoginInput
          id="email"
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
