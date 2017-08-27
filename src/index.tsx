import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { configureStore } from './utils/store';

const store = configureStore();
const mountPoint = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountPoint
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp />
            </Provider>,
            mountPoint
        );
    });
}
