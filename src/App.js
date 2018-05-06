import React, { Component } from 'react';

import NodeCard from "Component/NoteCard";

class App extends Component {
    render() {
        return (
            <div>
                { ['hong', 'zzz'].map((item, idx) =>
                    <NodeCard name={ item } key={ idx }/>) }
            </div>
        );
    }
}

export default App;