import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';

class Headline extends Component {
  render() {
    return (
      <h1>{this.props.children}</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Headline>Hehe tuyul</Headline>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
