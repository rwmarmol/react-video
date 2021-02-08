import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './assets/styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
    reducers, // All reducers
    {}, // Initial State
    applyMiddleware(reduxThunk)
);

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
