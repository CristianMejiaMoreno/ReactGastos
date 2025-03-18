// Button.tsx
import React from 'react';
import { ButtonProps } from '@/Interfaces/ButtonProps'; 

const Button = ({ text, onClick, type = 'button', className = '' }: ButtonProps): JSX.Element => {
    const baseClass = 'text-black bg-indigo hover:bg-indigo-200 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2';
    const combinedClass = `${baseClass} ${className}`;

  return (
    <a type={type} onClick={onClick} className={combinedClass}>
      {text}
    </a>
  );
};

export default Button;
