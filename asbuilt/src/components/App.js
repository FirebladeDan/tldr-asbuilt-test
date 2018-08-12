import React, { Component } from 'react';
import './App.css';
import NavbarFeature from './navbar/NavbarFeature';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeature />
        <Router />
      </div>
    );
  }
}

export default App;
