import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServerSetupScreen from './src/screens/Onboarding/ServerSetupScreen';
import TabNavigator from './src/navigation/TabNavigator';
import { useServerStore } from './src/store/serverStore';

const Stack = createNativeStackNavigator();

export default function App() {
  const { serverUrl, isConfigured } = useServerStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isConfigured ? (
          <Stack.Screen name="ServerSetup" component={ServerSetupScreen} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
