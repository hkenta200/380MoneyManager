import React from 'react';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import ResetPassword from './ResetPassword';
import SignUpScreen from './SignUpScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="ResetPassword" component={ResetPassword} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen;