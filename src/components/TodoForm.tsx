import * as React from 'react';
import { MapDispatchToProps } from 'react-redux';

interface ITodoFormProps {
    onSubmit: (event: React.SyntheticEvent<any>) => void;
    inputRef: (input: HTMLInputElement) => any;
}

export const TodoForm: React.SFC<ITodoFormProps> = ({ onSubmit, inputRef }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' ref={inputRef} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
};
