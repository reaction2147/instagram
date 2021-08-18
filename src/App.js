
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import NotFound from './pages/not-found';

import * as ROUTES from './constants/routes';

export default function App() {
    return (
        <Login />
    );
}