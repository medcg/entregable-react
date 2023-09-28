import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Repositorios from './components/pages/Repositorios';
import Usuarios from './components/pages/Usuarios';
import Navigation from './components/navigation/navbar';
import PaginaPrincipal from './components/pages/PaginaPrincipal';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/repos">
          <Repositorios />
        </Route>
        <Route path="/users">
          <Usuarios />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
