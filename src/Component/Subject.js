import React, {Component} from "react";
import PropTypes from "prop-types";

import "./index.less";

class Subject extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <div className="subject">
                <span className="name">{this.props.name}</span>
            </div>
        );
    }
}

export default Subject;
