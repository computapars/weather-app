// client/src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import About from './about';
import Help from './help';
import Home from './home';
import Page404 from './error';
import Weather from './weather';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/weather" component={Weather} />
          <Route exact path="/help" component={Help} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
