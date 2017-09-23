import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { AnyAction, Dispatch, bindActionCreators, ActionCreator } from 'redux';

import { Counter } from '../components/Counter';
import { handleDecrement, handleIncrement } from '../actions/Counter.actions';

interface ICounterAppStateProps {
    count: number;
}

interface ICounterAppDispatchProps {
    handleIncrement: ActionCreator<any>;
    handleDecrement: ActionCreator<any>;
}

class CounterApp extends React.Component<ICounterAppStateProps & ICounterAppDispatchProps, {}> {
    render() {
        return (
            <div>
                <Counter count={this.props.count} />
                <button onClick={this.props.handleIncrement}>Increment</button>
                <button onClick={this.props.handleDecrement}>Decrement</button>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<ICounterAppStateProps, {}> = (state: any, ownProps: {}) => {
    return {
        count: state.get('counter').get('count'),
    };
};

const mapDispatchToProps: MapDispatchToProps<ICounterAppDispatchProps, {}> =
    (dispatch: Dispatch<any>, ownProps: {}) => {
        return {
            handleDecrement: bindActionCreators(handleDecrement, dispatch),
            handleIncrement: bindActionCreators(handleIncrement, dispatch),
        };
    };

export default connect<ICounterAppStateProps, ICounterAppDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp);
