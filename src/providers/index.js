import React from 'react';
import Redux from './Redux';

export default ({ children }) => (
    <Redux>
        {React.Children.only(children)}
    </Redux>
);
