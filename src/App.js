import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Trip from './components/Trip';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id" render={({match}) => (
            <Trip
              id={match.params.id}
            />
          )}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
