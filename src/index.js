import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './App/App';

const config = {};

const configReducer = (state = config, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    config: configReducer,
});


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/*
    TODO:
        1 - create input form
        2 - document set up
        3 - test set up
        4 - add redux

    Dev should be able to..
        a. clone/fork the public github repo
        b. install dependencies
        c. run yarn start and a login form open in the browser
**/

