import React from 'react';

export default function Hexagon({ children, color = "#f9dc5c", strokeColor = "#eeba0b" }) {
    return (
        <div className="relative w-60 h-60 flex items-center justify-center text-white font-semibold text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="absolute w-full h-full">
                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill={color} stroke={strokeColor} strokeWidth="4" />
            </svg>
            <div className="relative z-10 px-6">{children}</div>
        </div>
    );
}
