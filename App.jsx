// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation/stackNav.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';




export default function App() {
  return (
    <>
          <Navigation />
      <Toast />
  </>

  );
}