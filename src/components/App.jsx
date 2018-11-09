import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Splash from './Splash';
import KegList from './KegList';


function App(){
  const container = {
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <div>
      <style global jsx> {' header { width: 100%; background-color: royalblue; } div { width: 100%; }'} </style>
      <header>
        <div style={container}>
          <h1>Taproom Tracker</h1>
          <Nav/>
        </div>
      </header>
      <Switch>
        <Route exact path='/' component={ Splash } />
        <Route path='/keg-list' component={ KegList } />
      </Switch>
    </div>
  );
}

export default App;
