import React, { Component } from 'react';

import NoteList from "Components/NoteList/index";
import Header from 'Components/Header/index';

import './index.less';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <NoteList/>
            </div>
        );
    }
}

export default App;