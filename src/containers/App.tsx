import * as React from 'react';

import TodoApp from './TodoApp';
import CounterApp from './CounterApp';

class App extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Counter</legend>
                    <CounterApp />
                </fieldset>
                <fieldset>
                    <legend>Todo</legend>
                    <TodoApp />
                </fieldset>
            </div>
        );
    }
}

export default App;
