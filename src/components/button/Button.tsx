import React from 'react';
import { Button as AntDButton } from 'antd';
import './Button.css';

export interface IButton {}

const Button: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <AntDButton type="primary" color="primary" className="example-button-class">
      {children}
    </AntDButton>
  );
};

export default Button;
