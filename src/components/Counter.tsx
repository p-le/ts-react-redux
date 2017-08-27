import * as React from 'react';

export interface ICounterProps {
    count: number;
}

export const Counter: React.SFC<ICounterProps> = ({ count }) => (
    <span>{ count }</span>
);

Counter.displayName = 'Counter Component';
