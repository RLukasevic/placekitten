import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from "react-redux";
import { store } from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import InfoScreen from './src/screens/InfoScreen';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;