import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Creature.css';



class Creature extends Component {
    
    state = {
        life: 100,
    }
    
    onClick = event => {
        this.setState({life: this.state.life - 10})
        console.log(this.state.life)
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
    
        
    
    render() {
        return (
            
            <div className= "creature" id={this.props.id} onClick={this.onClick} >
                <div className= "creatureLifeBand" style = {this.getLifeBandColor()}></div>
                <div className= "creatureBody"></div>
            </div>
        
        )
    }
}

Creature.propTypes = {
    id : PropTypes.string.isRequired,
}

export default Creature
