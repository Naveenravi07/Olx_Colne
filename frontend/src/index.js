import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from '../src/contexts/authContext'
import Store from './Store/Store'
import { Provider as ReduxProvider } from 'react-redux'

ReactDOM.render(

    <AuthProvider>
        <ReduxProvider store={Store} >
            <App />
        </ReduxProvider>
    </AuthProvider>

    , document.getElementById('root')
);
