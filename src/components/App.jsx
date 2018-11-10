import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Error404 from './Error404';
import Splash from './Splash';
import KegList from './KegList';


function App(){
  const container = {
    display: 'flex',
    flexDirection: 'column',
  }

  const heading = {
    textAlign: 'center',
    fontSize: '18px',
  }

  return (
    <div>
      <style global jsx> {' html, body {font-family: Roboto, sans-serif; margin: 0; padding: 0;} header {width: 100%;} div {width: 100%;}'} </style>
      <header>
        <div style={container}>
          <h1 style={heading}>Taproom Tracker</h1>
          <Nav/>
        </div>
      </header>
      <Switch>
        <Route exact path='/' component={ Splash } />
        <Route path='/keg-list' component={ KegList } />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
