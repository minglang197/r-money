import React from 'react';
import 'App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Tag from './views/Tag';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import EditTag from './views/EditTag';

  function App() {
    return (
        <Router>
              <Switch>
                <Route exact path="/tag">
                  <Tag />
                </Route>
                <Route exact path="/tag/:id">
                  <EditTag />
                </Route>
                <Route exact path="/money">
                  <Money />
                </Route>
                <Route exact path="/statistics">
                  <Statistics />
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
        </Router>
    );
  }


export default App;
