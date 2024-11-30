import React from 'react';
import { useChatStore } from '../store/chatStore';
import { X } from 'lucide-react';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreferencesModal: React.FC<PreferencesModalProps> = ({ isOpen, onClose }) => {
  const { preferences, updatePreferences } = useChatStore();

  if (!isOpen) return null;

  const sports = ['Basketball', 'Football', 'Soccer', 'Baseball', 'Volleyball'];
  const teams = ['Men\'s Basketball', 'Women\'s Basketball', 'Football', 'Soccer'];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-700 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Preferences</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold text-blue-400 mb-3">Favorite Sports</h3>
          <div className="space-y-2">
            {sports.map((sport) => (
              <label key={sport} className="flex items-center text-gray-300 hover:text-white">
                <input
                  type="checkbox"
                  checked={preferences.favoriteSports.includes(sport)}
                  onChange={(e) => {
                    const newSports = e.target.checked
                      ? [...preferences.favoriteSports, sport]
                      : preferences.favoriteSports.filter((s) => s !== sport);
                    updatePreferences({ favoriteSports: newSports });
                  }}
                  className="mr-3 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                />
                {sport}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-blue-400 mb-3">Favorite Teams</h3>
          <div className="space-y-2">
            {teams.map((team) => (
              <label key={team} className="flex items-center text-gray-300 hover:text-white">
                <input
                  type="checkbox"
                  checked={preferences.favoriteTeams.includes(team)}
                  onChange={(e) => {
                    const newTeams = e.target.checked
                      ? [...preferences.favoriteTeams, team]
                      : preferences.favoriteTeams.filter((t) => t !== team);
                    updatePreferences({ favoriteTeams: newTeams });
                  }}
                  className="mr-3 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                />
                {team}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="flex items-center text-gray-300 hover:text-white">
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) => updatePreferences({ notifications: e.target.checked })}
              className="mr-3 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
            />
            Receive notifications
          </label>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors font-medium"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};