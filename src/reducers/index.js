import { combineReducers } from 'redux';
import NotesReducer from './notesReducer';

const rootReducer = combineReducers({
    notes: NotesReducer
});

export default rootReducer;
