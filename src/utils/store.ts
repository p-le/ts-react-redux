
import { createStore, applyMiddleware, compose, Middleware, GenericStoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as Immutable from 'immutable';

export const configureStore = (initialState = Immutable.Map()) => {
    const middlewares: Middleware[] = [
        thunk,
    ];

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancers: GenericStoreEnhancer[] = [
        applyMiddleware(...middlewares),
    ];

    const store = createStore(
        rootReducer,
        initialState,
        (process.env.NODE_ENV !== 'production') ? composeEnhancers(...enhancers) : compose(...enhancers)
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};
