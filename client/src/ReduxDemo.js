import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render() {

        //step 2: create reducer: state & action
        const reducer = (state, action) => {
            if (action.type === "ATTACK") {
                return action.payload
            }
            if (action.type === "GREENATTACK") {
                return action.payload
            }
            return state;
        }
        //step 1: create store: reducer & state
        const store = createStore(reducer, "Peace");

        //step 3: subscribe
        store.subscribe(() => {
            console.log("Store is now", store.getState());
        })

        //step 4: dispatch action
        store.dispatch({ type: "ATTACK", payload: "Irom MAN" })
        store.dispatch({ type: "GREENATTACK", payload: "Hulk" })
        return (
            <div>
            </div>
        )
    }
}
export default ReduxDemo;