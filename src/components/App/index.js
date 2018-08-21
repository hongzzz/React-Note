import React, { Component } from 'react';

import NoteList from 'Components/NoteList';
import Header from 'Components/Header';
import Editor from 'Components/Editor';

import './index.less';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <NoteList/>
                <Editor/>
            </div>
        );
    }
}

export default App;