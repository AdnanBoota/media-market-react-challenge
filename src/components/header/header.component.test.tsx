import React from 'react';
import { mount } from '@cypress/react';
import Header from './header.component';

it('renders learn react link', () => {
    mount(<Header />);
});