import { createStore, combineReducers } from 'redux';
import { counterReducer, todoReducer } from './reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

