import { ActionCreator, Action } from 'redux';
export const ADD_TODO = 'add_todo';
export const TOGGLE_TODO = 'toggle_todo';

let todoId = 0;

interface IAddTodoAction extends Action {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface IToogleTodoAction extends Action {
    id: number;
}

export type TodoAction = IAddTodoAction & IToogleTodoAction;

export const addTodo: ActionCreator<IAddTodoAction> = (text: string) => ({
    type: ADD_TODO,
    id: todoId++,
    text,
    isCompleted: false,
});

export const toggleTodo: ActionCreator<IToogleTodoAction> = (id: number) => ({
    type: TOGGLE_TODO,
    id,
});

