import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './AppStore';
import { AppContainer } from 'react-hot-loader'
import App from './App';
import '../resources/scss/styles.js'


const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('mount')
    );
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        let nextApp = require('./App').default
        render(nextApp)
    })
}