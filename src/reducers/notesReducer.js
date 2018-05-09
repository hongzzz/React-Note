import { ADD_NOTE } from 'Actions/notesAction';

const defaultState = [
    'hi',
    'STORY'
];

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.payload];
        default:
            return state;
    }
}
