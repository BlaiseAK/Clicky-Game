import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header.js';
import Game from './components/Game/Game';
import houses from './Houses.json';
import './App.css';

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    houseOrder: houses
  };
  
  shuffle = houseOrder => {
    let newHouseOrder = [];

    while (houseOrder.length !== 0) {
      let i = Math.floor(houseOrder.length * Math.random());
      newHouseOrder.push(houseOrder[i]);
      houseOrder.splice(i, 1)
    }
    return newHouseOrder;

  };

  clickedHouse = id => {
    let clicked = [];
    // if they mis click but have a higher score
    if(clicked.includes(id) && (this.state.score>=this.state.topScore)) {
      console.log(id);
      console.log(clicked);
      this.setState({
        topScore: this.state.score,
        score: 0,
        houseOrder: this.shuffle(this.state.houseOrder)
      });
      clicked = [];
    }
    // if they misclick but don't have a higher score
    else if (clicked.includes(id) && (this.state.score<this.state.topScore)) {
      console.log(id);
      console.log(clicked);
      this.setState({
        score: 0,
        houseOrder: this.shuffle(this.state.houseOrder)
      });
      clicked = [];
    }
    // if chose correctly and score is greater than topScore
    else if (!clicked.includes(id) && (this.state.score>=this.state.topScore)) {
      clicked.push(id);
      console.log(clicked);
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.score + 1,
        houseOrder: this.shuffle(this.state.houseOrder)
      });
    }
    // if chose correctly and score is less than/equal to topScore
    else if (!clicked.includes(id) && (this.state.score<this.state.topScore)) {
      clicked.push(id);
      console.log(clicked);
      this.setState({
        score: this.state.score + 1,
        houseOrder: this.shuffle(this.state.houseOrder)
      })
    }


    // this.setState({
    //   houseOrder: this.shuffle(this.state.houseOrder)
    // });
}
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Header />
        <div className="game">
          {this.state.houseOrder.map(house => (
            <Game
            id={house.id}
            houseName={house.houseName}
            image={house.image}
            clickedHouse={this.clickedHouse}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
