import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Error404 from './Error404';
import Splash from './Splash';
import KegList from './KegList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }


  render() {
    return (
      <div>
        <style global jsx> {' html, body {font-family: Roboto, sans-serif; margin: 0; padding: 0; background-color: #eef4f2;} header, div {width: 100%;} .container { display: flex; flex-direction: column; } .container h1 { text-align: center; font-size: 18px; color: #415b76; text-decoration: underline;}'} </style>
        <header>
          <div className='container'>
            <h1>Taproom Tracker</h1>
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
}
export default App;
