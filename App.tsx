import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00ba09',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Kitten List' }}
        />
        <Stack.Screen 
          name="Info" 
          component={InfoScreen} 
          options={{ title: 'Kitten View' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}