import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { WorkoutsContextProvider } from './context/WorkoutContext';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <WorkoutsContextProvider>
            <App />
        </WorkoutsContextProvider>
    </React.StrictMode>
);
