import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

type ServerState = {
  serverUrl: string;
  isConfigured: boolean;
  setServerUrl: (url: string) => void;
  testConnection: (url?: string) => Promise<boolean>;
};

export const useServerStore = create<ServerState>((set, get) => ({
  serverUrl: '',
  isConfigured: false,

  setServerUrl: async (url: string) => {
    await SecureStore.setItemAsync('serverUrl', url);
    set({ serverUrl: url, isConfigured: true });
  },

  testConnection: async (urlToTest?: string) => {
    const url = urlToTest || get().serverUrl;
    if (!url) return false;

    try {
      const response = await axios.get(`${url}/health`, { timeout: 5000 });
      return response.status === 200;
    } catch (e) {
      return false;
    }
  }
}));

// Load from secure storage on init
(async () => {
  const savedUrl = await SecureStore.getItemAsync('serverUrl');
  if (savedUrl) {
    useServerStore.setState({ serverUrl: savedUrl, isConfigured: true });
  }
})();
