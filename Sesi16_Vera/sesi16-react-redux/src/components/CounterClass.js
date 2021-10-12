import { Component } from "react";
import {connect} from 'react-redux';
import React from  'react';

class CounterClass extends Component{
    increment(){
        this.props.dispatch({
            type:"INCREMENT"
        })
    }
    decrement() {
        if (this.props.localCounter!==0){
            this.props.dispatch({
                type:"DECREMENT"
            })
        }  
    }
    customIncrement(){
        this.props.dispatch({
            type:"CUST_INC",
            payload:10
        })
    }
    customDecrement(){
        if (this.props.localCounter>=10){
            this.props.dispatch({
            type:"CUST_DEC", 
            payload:10
            })
        }
    }
    render() {
        return (
            <div className="demo">
                <h1>Class Component Counter</h1>
                <h1 id="counter">{this.props.localCounter}</h1>
                <button id="cust_dec" onClick={()=> this.customDecrement()}>-10</button>
                &nbsp; &nbsp;
                <button id="decrement" onClick={()=> this.decrement()}>-</button>
                &nbsp; &nbsp;
                <button id="increment" onClick={()=> this.increment()}>+</button>
                &nbsp; &nbsp;
                <button id="cust_inc" onClick={()=> this.customIncrement()}>+10</button>
                <br/><br/><hr/>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        localCounter:state.counter
    }
}
export default connect(mapStateToProps)(CounterClass)