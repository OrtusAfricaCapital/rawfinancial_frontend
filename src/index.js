import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';

import Background from './components/Background'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <MenuProvider>
                <Background>
                    <App />
                </Background>
                </MenuProvider>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
