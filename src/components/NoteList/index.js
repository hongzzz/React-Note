import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteCard from 'Components/NoteCard';
import { addNote } from 'Actions/notesAction';

import './index.less';

class NoteList extends Component {
    static propTypes = {
        notes: PropTypes.array,
        addNote: PropTypes.func
    };

    render() {
        const notes = this.props.notes;

        return (
            <div className="note-list">
                <button className="add" onClick={ () => this.props.addNote('New Note') }>+</button>
                { notes.map((item, idx) =>
                    <NoteCard time={ 1 } color={ '#92FF45' } text={ item } key={ idx }/>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
    addNote: (note) => dispatch(addNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);