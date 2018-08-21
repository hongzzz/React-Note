import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

class NoteCard extends Component {
    static propTypes = {
        time: PropTypes.number,
        color: PropTypes.string,
        text: PropTypes.string,
    };

    render() {
        return (
            <div className="note-card" style={ { background: this.props.color } }>
                <div className="note-content">
                    { this.props.text }
                </div>
                <div className="note-info">
                    <span className="time">{new Date().toLocaleDateString()}</span>
                    <span className="edit">编辑</span>
                </div>
            </div>
        );
    }
}

export default NoteCard;