import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import './index.less';

class Editor extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    render() {
        const { color } = this.state;
        return (
            <div className="editor">
                <div className="mask"/>
                <div className="editor-window" style={ { background: color } }>
                    editor
                </div>
            </div>
        )
    }
}

export default Editor;