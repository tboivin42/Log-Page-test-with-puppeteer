import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import SuccessPage from './SuccessPage';
import Login from './Login';

const Wrapper = styled.div`
  background: linear-gradient(#659999, #f4791f);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
