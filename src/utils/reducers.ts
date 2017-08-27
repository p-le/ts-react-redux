import { counterReducer } from '../reducers';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
