import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import arithmeticApp from './reducers';

const store = createStore(arithmeticApp);
const elem = document.getElementByID('app');

ReactDOM.render(
   <Provider store={store}> <App/> </Provider>, elem
); 
