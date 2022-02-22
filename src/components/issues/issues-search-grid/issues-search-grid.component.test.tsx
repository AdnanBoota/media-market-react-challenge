import React from 'react';
import { mount } from '@cypress/react';
import IssueSearchGrid from './issues-search-grid.component';

it('renders learn react link', () => {
    mount(<IssueSearchGrid />);
    // cy.get('a').contains('Learn React');
    cy.get('input#search').type('test');
});