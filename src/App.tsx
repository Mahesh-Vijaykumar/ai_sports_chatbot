import React, { useState } from 'react';
import { Settings, Dumbbell } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { PreferencesModal } from './components/PreferencesModal';
import { SuggestionCards } from './components/SuggestionCards';
import { useChatStore } from './store/chatStore';
import { processMessage } from './utils/chatbot';

function App() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const { messages, preferences, addMessage } = useChatStore();

  const handleSendMessage = (message: string) => {
    addMessage(message, 'user');
    
    const response = processMessage(
      message,
      preferences.favoriteTeams,
      preferences.favoriteSports
    );
    
    setTimeout(() => {
      addMessage(response, 'assistant');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl h-[700px] flex flex-col border border-gray-700">
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-gray-800 rounded-t-xl">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Dumbbell size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              SJCIT Sports Assistant
            </h1>
          </div>
          <button
            onClick={() => setIsPreferencesOpen(true)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-8">
              <p className="text-xl font-semibold text-blue-400 mb-4">Welcome to SJCIT Sports Assistant!</p>
              <p className="text-lg mb-4">How can I help you today?</p>
              <SuggestionCards onCardClick={handleSendMessage} />
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
        </div>

        {/* Chat Input */}
        <ChatInput onSend={handleSendMessage} />

        {/* Preferences Modal */}
        <PreferencesModal
          isOpen={isPreferencesOpen}
          onClose={() => setIsPreferencesOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;