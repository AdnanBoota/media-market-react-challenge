import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../header/header.component';
import HomePage from '../../pages/home/home.page';
import IssuePage from '../../pages/issue/issue.page';

import '../../common/styles';
import './app.component.css';

import client from '../../common/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="issue/:id" element={<IssuePage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;