import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

class NoteCard extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <div className="note-card">
                note { this.props.name }
            </div>
        );
    }
}

export default NoteCard;