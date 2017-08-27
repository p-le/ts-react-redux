import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Counter } from '../components/Counter';
import { AnyAction, Dispatch, bindActionCreators, ActionCreator } from 'redux';
import { handleDecrement, handleIncrement } from '../actions/Counter.actions';
import * as styles from './App.css';

interface IAppStateProps {
    count: number;
}

interface IAppDispatchProps {
    handleIncrement: ActionCreator<any>;
    handleDecrement: ActionCreator<any>;
}

class App extends React.Component<IAppStateProps & IAppDispatchProps, {}> {
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

const mapStateToProps: MapStateToProps<IAppStateProps, {}> = (state: any, ownProps: {}) => {
    return {
        count: state.get('counter').get('count'),
    };
};

const mapDispatchToProps: MapDispatchToProps<IAppDispatchProps, {}> = (dispatch: Dispatch<any>, ownProps: {}) => {
    return {
        handleDecrement: bindActionCreators(handleDecrement, dispatch),
        handleIncrement: bindActionCreators(handleIncrement, dispatch),
    };
};

export default connect<IAppStateProps, IAppDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(App);
