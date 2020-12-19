import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/Contexts/UserContext';
import MainStack from './src/Stacks/MainStack';
import MainTab from './src/Stacks/MainTab';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}