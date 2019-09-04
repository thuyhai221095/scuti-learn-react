import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
        this.increaseAction = this.increaseAction.bind(this);
        this.decreaseAction = this.decreaseAction.bind(this);
    }

    increaseAction() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decreaseAction() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    render() { 
       
        let styles = {
            padding: "20px"
        };
        return ( 
            <div style={{padding: 20}}>
                <button className="btn btn-success" onClick={this.increaseAction}>+</button>
                <span style={{padding: 20}}>{this.state.count}</span>
                <button className="btn btn-primary" onClick={this.decreaseAction}>-</button>
            </div>
         );
    }
}
 
export default Counter;