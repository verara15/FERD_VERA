import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState={
    counter:0,
    users:[]
}

const counter = (state = initialState, action) =>{
    switch (action.type) {
        case "INCREMENT":
            let substractor = action.payload ? action.payload:1
            return { ...state, counter: state.counter + substractor}
        case "DECREMENT":
            return { ...state, counter: state.counter - 1}
        case "CUST_INC":
            return { ...state, counter: state.counter + action.payload}
        case "CUST_DEC":
            return { ...state, counter: state.counter - action.payload}
        case "SET_USERS":
            return { ...state, users: action.payload}
        default:
            return state
    }
}

const store = createStore(counter, applyMiddleware(thunk, logger))

export default store;