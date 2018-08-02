import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header.js';
import Game from './components/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
