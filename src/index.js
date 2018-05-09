import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'Reducers';

import "normalize.css";

import App from "Components/App";

const loadState = () => {
    const strState = localStorage.getItem('state');
    if (strState) {
        return JSON.parse(strState);
    } else {
        return undefined;
    }
};

const saveState = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};

const store = createStore(reducers, loadState());

// 关闭窗口保存state
window.onbeforeunload = () => {
    const state = store.getState();
    saveState(state);
};

render(
    <Provider store={ store }>
        <App/>
    </Provider>
    ,
    document.getElementById("root")
);
