import React from "react";
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
    label,
    size = 'medium',
    shape = 'rounded-md',
    onClick,
}) => {
    const sizeClass = sizeClasses[size];
    return (
        <button onClick={onClick}
        className={`bg-blue-600 text-white ${sizeClass} ${shape} hover:bg-blue-700 transition`}>{label}</button>
    )
}
export default Button;