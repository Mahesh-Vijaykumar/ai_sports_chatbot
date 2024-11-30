import { create } from 'zustand';
import { ChatState, Message } from '../types';

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  preferences: {
    favoriteTeams: [],
    favoriteSports: [],
    notifications: true,
  },
  addMessage: (content: string, role: 'user' | 'assistant') => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      content,
      role,
      timestamp: new Date(),
    };
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
  },
  updatePreferences: (preferences) => {
    set((state) => ({
      preferences: { ...state.preferences, ...preferences },
    }));
  },
}));