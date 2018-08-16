import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Player from './components/player/Player';
/**
 * Class App
 * Contains the routes to the main components of the app
 * @author Carlos Elguedo
 * @version 0.0.1
 */
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/player' exact component={Player}/>
        
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
