import React from 'react';

// Define the types for the Button component props
interface ButtonProps {
  color?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ color = 'bg-red-400', text = 'Button', onClick }) => {
  return (
    <div>
      <button 
        onClick={onClick} 
        className={`py-3 text-xl w-full ${color} shadow-button rounded-2xl font-semibold`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
