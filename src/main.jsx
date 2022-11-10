import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <WorkoutsContextProvider>
                <App />
            </WorkoutsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
