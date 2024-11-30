import React from 'react';
import { SUGGESTION_CARDS } from '../utils/constants';

interface SuggestionCardsProps {
  onCardClick: (message: string) => void;
}

export const SuggestionCards: React.FC<SuggestionCardsProps> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
      {SUGGESTION_CARDS.map(([emoji, title, description, query]) => (
        <div
          key={title}
          onClick={() => onCardClick(query)}
          className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer transform hover:scale-105 duration-200"
        >
          <div className="text-lg mb-1">
            {emoji} {title}
          </div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
      ))}
    </div>
  );
};