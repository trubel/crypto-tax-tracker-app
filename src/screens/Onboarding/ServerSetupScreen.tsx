import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useServerStore } from '../../store/serverStore';

export default function ServerSetupScreen({ navigation }: any) {
  const { setServerUrl, testConnection } = useServerStore();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    if (!url) return Alert.alert('Error', 'Enter a URL');
    setLoading(true);
    const success = await testConnection(url);
    setLoading(false);
    if (success) {
      Alert.alert('✅ Success', 'Connected to backend!', [{ text: 'Continue', onPress: () => {
        setServerUrl(url);
        navigation.replace('Main');
      }}]);
    } else {
      Alert.alert('❌ Failed', 'Could not reach /health endpoint');
    }
  };

  return (
    <View className="flex-1 bg-zinc-950 justify-center p-6">
      <Text className="text-4xl font-bold text-white text-center mb-8">Crypto Tax Tracker</Text>
      <Text className="text-zinc-400 text-center mb-8">Enter your self-hosted backend URL</Text>
      
      <TextInput
        className="bg-zinc-900 text-white p-5 rounded-3xl text-lg mb-6"
        placeholder="https://mytracker.example.com"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        keyboardType="url"
      />
      
      <TouchableOpacity 
        onPress={handleTest} 
        disabled={loading}
        className="bg-emerald-600 p-5 rounded-3xl"
      >
        {loading ? <ActivityIndicator color="white" /> : <Text className="text-white text-center font-semibold text-lg">Test Connection &amp; Continue</Text>}
      </TouchableOpacity>
    </View>
  );
}
