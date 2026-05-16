import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useServerStore } from '../../store/serverStore';

export default function SettingsScreen() {
  const { serverUrl, setServerUrl, testConnection } = useServerStore();
  const [inputUrl, setInputUrl] = useState(serverUrl);

  const handleTest = async () => {
    const success = await testConnection(inputUrl);
    Alert.alert(success ? '✅ Connected' : '❌ Connection Failed', success ? 'Backend is reachable' : 'Check URL and try again');
  };

  const handleSave = () => {
    setServerUrl(inputUrl);
    Alert.alert('Saved', 'Server URL updated');
  };

  return (
    <View className="flex-1 bg-zinc-950 p-6">
      <Text className="text-2xl font-bold text-white mb-6">Server Settings</Text>
      <TextInput
        className="bg-zinc-900 text-white p-4 rounded-2xl mb-4"
        placeholder="https://mytracker.example.com"
        value={inputUrl}
        onChangeText={setInputUrl}
        autoCapitalize="none"
        keyboardType="url"
      />
      <TouchableOpacity onPress={handleTest} className="bg-blue-600 p-4 rounded-2xl mb-3">
        <Text className="text-white text-center font-semibold">Test Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSave} className="bg-emerald-600 p-4 rounded-2xl">
        <Text className="text-white text-center font-semibold">Save URL</Text>
      </TouchableOpacity>
    </View>
  );
}
