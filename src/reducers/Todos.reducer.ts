import * as Immutable from 'immutable';
import * as Action from '../actions/Todos.action';
import { ITodo } from '../models/Todo';
import { AnyAction } from 'redux';

const INITIAL_STATE = Immutable.List<ITodo>();

export const todoReducer = (state = INITIAL_STATE, action: Action.TodoAction) => {
    switch (action.type) {
        case Action.ADD_TODO:
            return state.concat({
                id: action.id,
                text: action.text,
                isCompleted: action.isCompleted,
            });
        case Action.TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? todo.isCompleted = !todo.isCompleted : todo);
        default:
            return state;
    }
};
