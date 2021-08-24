import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    HomePage, ErrorPage, StatPage,
} from './pages';

class AppRouter extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stat/:indicator/:mode" component={StatPage} />
          <Route exact path="/error" component={ErrorPage} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;