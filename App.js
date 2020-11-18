import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigation/stack';
import HomeScene from './src/scenes/HomeScene';
import Routes from './src/navigation/routes';
import PlaygroundScene from './src/scenes/PlaygroundScene';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME_SCREEN}>
        <Stack.Screen
          name={Routes.HOME_SCREEN}
          component={HomeScene}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={Routes.PLAYGROUND}
          component={PlaygroundScene}
          options={{title: 'new page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
