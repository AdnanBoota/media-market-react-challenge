import React from 'react';
import { mount } from '@cypress/react';
import HomePage from './home.page';

it('renders learn react link', () => {
    mount(<HomePage />);
    // cy.get('a').contains('Learn React');
    cy.get('input#search').type('test');
});