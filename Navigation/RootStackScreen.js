import React from 'react';

import SplashScreen from '../Screens/SplashScreen';
import SignInScreen from '../Screens/SignInScreen';
import ResetPassword from '../Screens/ResetPassword';
import SignUpScreen from '../Screens/SignUpScreen';


import HomeScreen from '../Screens/Home';
import AddSaving from '../Screens/AddSaving';
import AddExpense from '../Screens/AddExpense';
import TipsPage from '../Screens/TipsPage';
import MainVisuals from '../Screens/MainVisualsPage';

import SavingPage from '../Screens/SavingPage';
import SpendingPage from '../Screens/SpendingPage';
import IncomePage from '../Screens/IncomePage';

import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabbing = () => {
    return (  
          <Tab.Navigator
            screenOptions={{headerShown : false, tabBarStyle: { backgroundColor: "#8800C7", left: 20, right: 20, bottom: 5, borderRadius: 10, position : 'absolute'}}}
          >
            <Tab.Screen name="HomePage" component={HomeScreen}
              options={{ 
                tabBarIcon : () => (
                  <Image
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}}
                    resizeMode="contain"
                    style={{
                      width : 30,
                      height : 30,
                      tintColor : "#ca8dfd"
                    }}
                  ></Image>
                )
  
              }}
            />
            <Tab.Screen name="+Expense" component={AddExpense}
              options={{ 
                tabBarIcon : () => (
                  <Image
                    source={{uri:'http://cdn.onlinewebfonts.com/svg/img_456623.png'}}
                    resizeMode="contain"
                    style={{
                      width : 30,
                      height : 30,
                      tintColor : "#ca8dfd"
                    }}
                  ></Image>
                )
  
              }}
            />
            <Tab.Screen name="+Saving" component={AddSaving}
              options={{ 
                tabBarIcon : () => (
                  <Image
                    source={{uri:'http://cdn.onlinewebfonts.com/svg/img_548764.png'}}
                    resizeMode="contain"
                    style={{
                      width : 30,
                      height : 30,
                      tintColor : "#ca8dfd"
                    }}
                  ></Image>
                )
  
              }}
            />
            <Tab.Screen name="Tips" component={TipsPage}
            options={{ 
              tabBarIcon : () => (
                <Image
                  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/8/88/Microsoft_Tips_icon.png'}}
                  resizeMode="contain"
                  style={{
                    width : 30,
                    height : 30,
                    tintColor : "#ca8dfd"
                  }}
                ></Image>
              )

            }}
          />
          <Tab.Screen name="Visuals" component={MainVisuals}
            options={{ 
              tabBarIcon : () => (
                <Image
                  source={{uri:'http://cdn.onlinewebfonts.com/svg/img_464466.png'}}
                  resizeMode="contain"
                  style={{
                    width : 30,
                    height : 30,
                    tintColor : "#ca8dfd"
                  }}
                ></Image>
              )

            }}
          />
            </Tab.Navigator>
    );
}

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator>
            {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="ResetPassword" component={ResetPassword} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
            <RootStack.Screen name="Home" component={Tabbing} options={{headerShown:false}}/>
            <RootStack.Screen name="IncomePage" component={IncomePage} />
            <RootStack.Screen name="SpendingPage" component={SpendingPage} />
            <RootStack.Screen name="SavingPage" component={SavingPage} />

        </RootStack.Navigator>
    )
}

export default RootStackScreen;