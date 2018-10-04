import React, { Component } from 'react';
import './App.css';

import Creature from './Creature.js';

class App extends Component {
    
    state = {
        path : [{x: 50, y: 250},{x: 50, y: 450},{x: 250, y: 450},{x: 350, y: 250}, {x: 890, y: 250}], //paths have to be defined with regularly spaced milestones so that the speed of the Creature remains constant
        speed : 2,
        realeaseCreatureArray : [2,4,5,6,9],
        lives : 10,
        level : 1,
        score : 0,
        gameIsOn : false,
    }

    // Create the animation for the Creatures to follow the path defined in this.state
    getAnimation() {
        let styleSheet = document.styleSheets[0];
        let animationName = "animationName";
        let keyframes = `@keyframes ${animationName} {`;
        for (var i = 0; i<this.state.path.length; i++){
            keyframes += `${100*(i+1)/this.state.path.length}% {left: ${this.state.path[i].x}px; top: ${this.state.path[i].y}px;} `;
        }
        keyframes += '}';
        
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
    
    //Create the canvas for the road according to the path defined in this.state
    getCanvas(){
        var ctx = document.getElementById("canvas").getContext("2d");
        ctx.strokeStyle = '#775500';
        ctx.beginPath();
        ctx.lineWidth= 30;
        ctx.moveTo(0,263);
        this.state.path.forEach(function(element){
            ctx.lineTo(element.x + 10,element.y + 13);
        });
        ctx.stroke();
    }

    // Remove a life when a Creature successfully crosses the path
    removeLife= () => {
        this.setState({lives: this.state.lives - 1})
    }
    
    // Add points to the score when a creature is killed
    increaseScore= () => {
        this.setState({score: this.state.score + 10})
    }
    
    // On click monitoringButton ------ pour aller au prochain niveau : il faut créer tous les niveau au départ et les afficher l'un après l'autre
    onClickMonitoringButton = () => {
        this.setState({gameIsOn: true});
    }

    componentWillMount() {
        this.getAnimation();
    }

    componentDidMount(){
        this.getCanvas();
    }

    
    
  render() {
    return (
      <div className="App">
            <div className="playField">
                <button id="gameMonitoringButton" onClick = {this.onClickMonitoringButton}>Start Game</button>
                <div id = "infoField">
                    <div id = "levelCount">Level : {this.state.level}</div>
                    <div id = "livesCount">Lives : {this.state.lives}</div>
                    <div id = "levelCount">Score : {this.state.score}</div>
                </div>
                <canvas id = "canvas" height = "600px" width = "900px" ref="canvas"></canvas>
                {this.state.gameIsOn && this.state.realeaseCreatureArray.map((delay, index)=>(<Creature id= "creature_1" ref= "creature_1" key= {index} animationName= "animationName" speed= {this.state.speed} delay={delay} removeLife={this.removeLife} increaseScore={this.increaseScore}></Creature>))}
            </div>
      </div>
    );
  }
}

export default App;
