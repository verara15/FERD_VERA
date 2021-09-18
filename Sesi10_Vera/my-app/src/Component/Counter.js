import React from 'react';

export default class Counter extends React.Component{
    constructor() {
        super()
        this.state = {
            counter:0
        }
    }
    getCounter(){
        return this.state.counter;
    }

    increment=()=>{
        this.setState(
            {counter: this.state.counter + 1}
        )
    }

    decrement=()=>{
        if (this.state.counter !== 0){     
            this.setState(
                {counter: this.state.counter - 1}
            )
        }
    }

    render(){
        return(
            <div>
                <h3>{this.getCounter()}</h3>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}