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
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
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
          <Route path='/inventory' render={()=> <KegList kegList={this.state.masterKegList} />} />
          <Route path='/new-keg' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
