import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Error404 from './Error404';
import Splash from './Splash';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This component may be unnecessarily stateful;--- I need to set it up according to the curriculum to properly understand which components I'll need in my end result, and then refactor my approach. //
    };
  }


  render() {
    return (
      <div>
        <style global jsx> {' html, body {font-family: Roboto, sans-serif; margin: 0; padding: 0; min-width: 522px; background-color: #eef4f2;} header, div {width: 100%; margin: auto; } .container { display: flex; flex-direction: column; } .container h1 { text-align: center; font-size: 18px; color: #415b76; text-decoration: underline;}'} </style>
        <header>
          <div className='container'>
            <h1>Taproom Tracker</h1>
            <Nav/>
          </div>
        </header>
        <Switch>
          <Route exact path='/' component={ Splash } />
          <Route path='/inventory' component={ KegList } />
          <Route path='/new-keg' component={ NewKegForm } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;
