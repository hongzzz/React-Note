import { VERSION_UPDATE } from 'Actions/versionAction';

export default function (state = 0, action) {
    switch (action.type) {
        case VERSION_UPDATE:
            return action.version;
        default:
            return state;
    }
}