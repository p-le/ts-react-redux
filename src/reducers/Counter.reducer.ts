import * as Const from '../actions/Counter.actions';
import * as Immutable from 'immutable';
import { AnyAction } from 'redux';

const INITIAL_STATE = Immutable.fromJS({
    count: 0,
});

export const counterReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case Const.INCREMENT:
            return state.set('count', state.get('count') + 1);
        case Const.DECREMENT:
            return state.set('count', state.get('count') - 1);
        default:
            return state;
    }
};
