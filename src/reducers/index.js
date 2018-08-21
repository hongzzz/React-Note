import { combineReducers } from 'redux';
import NotesReducer from './notesReducer';
import VersionReducer from './versionReducer';

const rootReducer = combineReducers({
    notes: NotesReducer,
    version: VersionReducer,
});

export default rootReducer;
