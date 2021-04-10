import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View  } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';

// Screens
import WelcomeScreen from "./screens/welcome.js";
import DropdownScreen from "./screens/dropdown.js";
import FormScreen from "./screens/form.js";
import RadioScreen from "./screens/radio.js";
import Account from "./screens/account.js"

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Form: FormScreen,
    DropDown: DropdownScreen,
    Radio: RadioScreen,
    Account: Account
  },
  {
    initialRouteName: "Welcome"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}
