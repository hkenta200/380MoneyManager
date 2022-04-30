//import React from 'react';
import React, { useState, useEffect, useContext } from 'react';

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

//https://stackoverflow.com/questions/2452226/master-branch-and-origin-master-have-diverged-how-to-undiverge-branches


//import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext, AuthProvider } from './Navigation/AuthProvider';
import SignInScreen from './Screens/SignInScreen';

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

  if (!user) {
    return (
      <AuthProvider>
        <NavigationContainer>
          <SignInScreen />
        </NavigationContainer>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Text>Welcome {auth().currentUser?.email}</Text>
        <RootStackScreen />
      </NavigationContainer>
    </AuthProvider>
  )
};

export default App;