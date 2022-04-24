//import React from 'react';
import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; //https://reactnavigation.org/docs/getting-started/

import RootStackScreen from './Navigation/RootStackScreen';


//import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './Navigation/AuthProvider';

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(AuthContext);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
};

export default App;