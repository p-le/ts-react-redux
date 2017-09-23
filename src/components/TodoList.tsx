import * as React from 'react';
import { Todo } from './Todo';
import { ITodo } from '../models/Todo';

export interface ITodoListProps {
    onTodoClick: (todoId: number) => any;
    todos: ITodo[];
}

export const TodoList: React.SFC<ITodoListProps> = ({ todos, onTodoClick }) => (
    <ul>
        { todos.map(todo => <Todo key={todo.id} todo={todo} onClick={() => onTodoClick(todo.id)} />) }
    </ul>
);
