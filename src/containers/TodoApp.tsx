import * as React from 'react';
import * as Immutable from 'immutable';

import { connect, MapDispatchToProps, MapStateToProps, Dispatch } from 'react-redux';
import { bindActionCreators, ActionCreator } from 'redux';

import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../models/Todo';
import { addTodo, toggleTodo } from '../actions/Todos.action';

interface ITodoAppStateProps {
    visibleTodos: ITodo[];
}

interface ITodoAppDispatchProps {
    addTodo: ActionCreator<any>;
    toggleTodo: ActionCreator<any>;
}

type ITodoAppProps = ITodoAppDispatchProps & ITodoAppStateProps;

class TodoApp extends React.Component<ITodoAppProps, {}> {
    inputRef: HTMLInputElement;

    constructor() {
        super();
        this.inputRef = null;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getInputRef = this.getInputRef.bind(this);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!this.inputRef.value.trim()) {
            return;
        }
        this.props.addTodo(this.inputRef.value);
        this.inputRef.value = '';
    }

    handleClick(id: number) {
        this.props.toggleTodo(id);
    }

    getInputRef(input: HTMLInputElement) {
        this.inputRef = input;
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.handleSubmit} inputRef={this.getInputRef} />
                <TodoList todos={this.props.visibleTodos} onTodoClick={this.handleClick} />
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<ITodoAppStateProps, {}> =
    (state: any, ownProps = {}) => ({
        visibleTodos: state.get('todos'),
    });

const mapDispatchToProps: MapDispatchToProps<ITodoAppDispatchProps, {}> =
    (dispatch: Dispatch<any>, ownProps: {}) => ({
        addTodo: bindActionCreators(addTodo, dispatch),
        toggleTodo: bindActionCreators(toggleTodo, dispatch),
    });

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
