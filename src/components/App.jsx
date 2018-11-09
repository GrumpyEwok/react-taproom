import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SampleComponent from './SampleComponent';

function App(){
  return (
    <div>
      <header>
        <p>A Header Component Might Go Here</p>
      </header>
      <Switch>
        <Route exact path='/' component={SampleComponent} />
        <Route path='/newSamplePath' component={null} />
      </Switch>
    </div>
  );
}

export default App;
