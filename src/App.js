import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Player from './components/player/Player';
//<Route path='/post/:id' />

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
