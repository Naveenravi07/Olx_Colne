import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from '../src/contexts/authContext'


ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    , document.getElementById('root')
);