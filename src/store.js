import { createStore } from 'redux';
import reducers from 'Reducers';
import { updateVersion } from 'Actions/versionAction';

const __VERSION__ = 0.1; // 版本号

// 从localStorage加载state
const loadState = () => {
    const strState = localStorage.getItem('state');
    if (strState) {
        const state = JSON.parse(strState);
        if (state.version !== __VERSION__) {
            return undefined;
        } else {
            return state;
        }
    } else {
        return undefined;
    }
};
// 保存state到localStorage
const saveState = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};

const store = createStore(reducers, loadState());

// 关闭窗口保存state
window.onbeforeunload = () => {
    store.dispatch(updateVersion(__VERSION__));
    const state = store.getState();
    saveState(state);
};

export default store;