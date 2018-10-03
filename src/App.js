import React, { Component } from 'react';
import './App.css';

import Creature from './Creature.js';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="playField">            
                <Creature id= "creature_1"></Creature>
            </div>
      </div>
    );
  }
}

export default App;
