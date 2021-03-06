import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Creature.css';



class Creature extends Component {
    
    state = {
        life: 100,
        displayed : false,
        isAlive : true,
    }
    
    onClick = event => {
        this.setState({life: this.state.life - 10});
        if (this.state.life <=0){
            this.setState({isAlive:false});
            this.props.increaseScore();
        }
    }
    
    
    getLifeBandColor(){
        if (this.state.life > 80){
            return {backgroundColor : 'green', width : "20px"};
        } else if (this.state.life <= 80 && this.state.life >= 60) {
            return {backgroundColor : 'yellow', width : "15px"};
        } else if (this.state.life < 60 && this.state.life >= 40) {
            return {backgroundColor : 'orange', width: "10px"};
        } else {
            return {backgroundColor : 'red', width:"5px"};
        }
        
    }
    

    componentDidMount(){
        this.refs.creature.addEventListener('animationstart', () => this.setState({displayed: true}));
        this.refs.creature.addEventListener('animationend', ()=>{
            if(this.state.isAlive){
                this.props.removeLife();
            };
            this.setState({displayed: false});
        });
    }
        
    
    render() {
        return (
            <div className= "creature" id={this.props.id} ref="creature" onClick={this.onClick} style ={{animationName : this.props.animationName, animationDuration: `${20/this.props.speed}s`, animationTimingFunction: "linear", animationDelay: `${this.props.delay}s`, animationIterationCount: 1, dispay : this.props.display}}>
                {(this.state.displayed && this.state.isAlive) && <div className= "creatureLifeBand" style = {this.getLifeBandColor()}></div>}
                {(this.state.displayed && this.state.isAlive) && <div className= "creatureBody">x</div>}
            </div>
        
        )
    }
}

Creature.propTypes = {
    id : PropTypes.string.isRequired,
    animationName : PropTypes.string.isRequired,
    speed : PropTypes.number.isRequired,
    delay : PropTypes.number.isRequired,
}

export default Creature
