import React from 'react';
import './Button.css';

export interface IButton {}

const Button: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;