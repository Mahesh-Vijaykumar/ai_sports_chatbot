export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface SportEvent {
  id: string;
  title: string;
  date: Date;
  location: string;
  sport: string;
  description: string;
  ticketsAvailable: boolean;
  ticketPrice?: number;
}

export interface UserPreferences {
  favoriteTeams: string[];
  favoriteSports: string[];
  notifications: boolean;
}

export interface ChatState {
  messages: Message[];
  preferences: UserPreferences;
  addMessage: (content: string, role: 'user' | 'assistant') => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}