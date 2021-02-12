import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';

  const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  const Main = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: auto;
  `;
  function App() {
    return (
        <Router>
          <Wrapper>
              <Main>
              <Switch>
                <Route path="/tags">
                  <Tags />
                </Route>
                <Route path="/money">
                  <Money />
                </Route>
                <Route path="/statistics">
                  <Statistics />
                </Route>
                  <Redirect exact from="/" to="/money"/>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </Main>
            <Nav></Nav>

          </Wrapper>
        </Router>
    );
  }
function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}
function NoMatch() {
  return (
      <h3>搞的什么鬼，页面根本不存在</h3>
  );
}

export default App;
