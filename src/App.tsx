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

  const Wrapper = styled.div`
  border: 1px solid red;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;
  const Main = styled.div`
    display: flex;
    flex-grow: 1;
    overflow: auto;
  `;
  const Nav = styled.div`
    border: 1px solid red;
    >ul {
      display: flex;
      >li {
        width: 33.333%;
        padding: 16px;
        text-align: center;
      }
    }
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
            <Nav>
              <ul>
                <li>
                  <Link to="/tags">tags</Link>
                </li>
                <li>
                  <Link to="/money">money</Link>
                </li>
                <li>
                  <Link to="/statistics">statistics</Link>
                </li>
              </ul>
            </Nav>

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
