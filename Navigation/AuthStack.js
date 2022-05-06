import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

import SplashScreen from '../Screens/SplashScreen';
import SignInScreen from '../Screens/SignInScreen';
import ResetPassword from '../Screens/ResetPassword';
import SignUpScreen from '../Screens/SignUpScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const AuthStack = () => { //This page is used when there is no user currently logged in.
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>

        </RootStack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})