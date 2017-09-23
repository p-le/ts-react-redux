import { combineReducers } from 'redux-immutable';

import { counterReducer } from '../reducers';
import { todoReducer } from '../reducers';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
});

export default rootReducer;
