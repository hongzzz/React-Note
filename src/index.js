import React, { Component } from "react";
import { render } from "react-dom";
import "normalize.css";

import Subject from "Com/Subject";

class App extends Component {
    render() {
        return (
            <div>
                <Subject name={ "Hongzzz" }/>
            </div>
        );
    }
}

render(<App/>, document.getElementById("root"));
