import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Splash from './Splash';
import KegList from './KegList';


function App(){
  return (
    <div>
      <style global jsx>{' div { border: 1px solid blue;}'}
      </style>
      <header>
        <div className='container'>
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
