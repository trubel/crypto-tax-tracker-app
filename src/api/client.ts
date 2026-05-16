import axios from 'axios';
import { useServerStore } from '../store/serverStore';

export const apiClient = axios.create({
  timeout: 10000,
});

// Interceptor to attach current server URL
apiClient.interceptors.request.use(async (config) => {
  const { serverUrl } = useServerStore.getState();
  if (serverUrl) {
    config.baseURL = serverUrl;
  }
  return config;
});
