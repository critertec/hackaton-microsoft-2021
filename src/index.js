import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';

import Header from './components/header/header';

import Home from './components/home/home';
import Agenda from './components/agenda/agenda';
import Formacion from './components/formacion/formacion';
import Foro from './components/foro/foro';
import Registro from './components/registro/registro';
import Idea from './components/tuidea/tuidea';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/agenda">
          <Agenda />
        </Route>
        <Route path="/formacion">
          <Formacion />
        </Route>
        <Route path="/foro">
          <Foro />
        </Route>
        <Route path="/idea">
          <Idea />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
