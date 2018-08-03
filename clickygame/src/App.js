import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header.js';
import Game from './components/Game/Game';
import houses from './Houses.json'

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    houseOrder: houses
  };
  
  // shuffle = houseOrder => {
  //   let newHouseOrder =
  // };

  clickedHouse = id => {
  
    const houseOrder = this.state.houseOrder.filter(house => house.id !== id);
  
    // this.setstate({
    //   houseOrder: this.shuffle(this.state.houseOrder)
    // })
}
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        {this.state.houseOrder.map(house => (
          <Game
          id={house.id}
          houseName={house.houseName}
          image={house.image}
          clickedHouse={this.clickedHouse}
          />
        ))}
      </div>
    );
  }
}

export default App;
