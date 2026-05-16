import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ServerSetupScreen from './src/screens/Onboarding/ServerSetupScreen';
import { useServerStore } from './src/store/serverStore';

export type RootStackParamList = {
  ServerSetup: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { serverUrl } = useServerStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!serverUrl ? (
            <Stack.Screen name="ServerSetup" component={ServerSetupScreen} />
          ) : (
            <Stack.Screen name="Main" component={MainNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function MainNavigator() {
  return null; // Will be implemented with tabs
}