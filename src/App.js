import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from './Provider';
import { Viewer } from './Viewer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Provider />
        </Route>
        <Route path="/watch/">
          <Viewer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
