import React from 'react';
import { CardProps } from "@/interfaces/index";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
