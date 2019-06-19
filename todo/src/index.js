import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todo from './reducers'

import Todo from './components/Todo'

const loadState = () =>{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch (err){
        return undefined;
    }
}

const saveState = (state) =>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }catch(err){
        console.log(err)
    }
}

const persistedState = loadState();
const store = createStore(
    todo,
    persistedState
)

store.subscribe(() =>{
    saveState(store.getState())
});


ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>
, document.getElementById('root'));

//PERSIST DATA TO LOCALSTORAGE
//1. Create a function that will load the state to the local storage
/////a. wrap in try catch in case user has privacy mode not permitting localstorage
//2. Create bananna term "persistedState" and pass loadState function to it
//////a add persistedState to the store

//3. Create a function that will save the state to the local storage
/////a. wrap in try catch to only work if state is serializeable

//3. Subscribe to store and initialize the saveState
//function inside, then pass in the state as a parameter;

/////BREAKDOWN WHAT WILL HAPPEN
//When app is initialized it will grab the state from the localStorage.
//If nothing exist it will default to the initialState located in the reducer
// if Data does exist it wil pull the data from the local storage and using
/////JSON.parse to transform the data to a useable object
//When "saving data" upon the event/state change the saveState function will
////initialize and grab the state/data from the store, then JSON.strigify to transform
//// the data object to a readable JSON string and save it to the localstorage
