import * as React from 'react';

interface CounterProps {
  current: number;
  step: number;
}

export const Counter = ({ current, step }: CounterProps) => (
  <div>
    <div>Step: {step}</div>
    <div className="current">{current}</div>
  </div>
);
