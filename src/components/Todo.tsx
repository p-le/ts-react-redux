import * as React from 'react';
import { ITodo } from '../models/Todo';

export interface ITodoProps {
    onClick: () => any;
    todo: ITodo;
}

export const Todo: React.SFC<ITodoProps> = ({ onClick, todo }) => (
    <li onClick={onClick} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        { todo.text }
    </li>
);
