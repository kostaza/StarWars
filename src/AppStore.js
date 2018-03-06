import { combineReducers, createStore } from 'redux';
import rootReducer from './AppReducers';

export const storeCreator = (initialState) => createStore(combineReducers({
    root: rootReducer,
}), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = storeCreator();

export default store;