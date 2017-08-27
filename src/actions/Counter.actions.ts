import { ActionCreator, Action } from 'redux';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const handleIncrement: ActionCreator<Action> = () => ({
    type: INCREMENT,
});

export const handleDecrement: ActionCreator<Action> = () => ({
    type: DECREMENT,
});
