import React from 'react';
import { mount } from '@cypress/react';
import IssuePage from './issue.page';

it('renders learn react link', () => {
    mount(<IssuePage />);
});