import React, { useEffect } from 'react';
import Peer from 'peerjs';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from './Provider';
import { Viewer } from './Viewer';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Provider />
      </Route>
      <Route path="/watch/">
        <Viewer />
      </Route>
    </Switch>
  );
}

export default App;
