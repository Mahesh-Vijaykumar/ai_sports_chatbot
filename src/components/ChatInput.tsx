import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-700 p-6 bg-gray-800 rounded-b-xl">
      <div className="flex gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about sports, events, or facilities..."
          className="flex-1 p-4 bg-gray-700 text-gray-100 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};