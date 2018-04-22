import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
          <Main />
      </div>
    );
  }
}

export default App
