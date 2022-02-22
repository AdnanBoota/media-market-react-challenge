import React from 'react';
import { mount } from '@cypress/react';
import App from './app.component';

it('renders learn react link', () => {
    mount(<App />);
});