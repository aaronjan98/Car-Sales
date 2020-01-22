import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { featureReducer } from './reducers/featureReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);
//console.log('store:', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 rootElement);
