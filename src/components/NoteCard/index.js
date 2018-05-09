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
                { this.props.text }
            </div>
        );
    }
}

export default NoteCard;