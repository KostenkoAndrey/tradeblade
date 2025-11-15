import React from 'react';

export interface ButtonProps {
  title: string;
  className?: string;
}

const Button = ({ title, className }: ButtonProps) => {
  return <button className=''>{title}</button>;
};

export default Button;
