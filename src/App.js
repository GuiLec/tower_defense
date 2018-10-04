import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'

import Creature from './Creature.js';

class App extends Component {
    
    state = {
        path : [{x: 50, y: 250},{x: 50, y: 450},{x: 250, y: 450},{x: 350, y: 250}, {x: 890, y: 250}], //paths have to be defined with regularly spaced milestones so that the speed of the Creature remains constant
        speed : 5,
    }

    componentWillMount() {
        let styleSheet = document.styleSheets[0];
        let animationName = "animationName";
        let keyframes = `@keyframes ${animationName} {`;
        for (var i = 0; i<this.state.path.length; i++){
            keyframes += `${100*(i+1)/this.state.path.length}% {left: ${this.state.path[i].x}px; top: ${this.state.path[i].y}px;} `;
        }
        keyframes += '}';
        
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        
        
    }

    componentDidMount(){
        console.log(ReactDOM.findDOMNode(this.refs.creature_1).getBoundingClientRect().left);
    }

    
  render() {
    return (
      <div className="App">
            <div className="playField">            
                    <Creature id= "creature_1" ref= "creature_1" animationName= "animationName" speed= {this.state.speed} ></Creature>
            </div>
      </div>
    );
  }
}

export default App;
