import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {PP} from '../Screens/pendingPro';
import {CP} from '../Screens/completedPro';
import HomeScreen from '../Screens/homeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Completed Project " component={CP} />
        <Tab.Screen name="Pending Project" component={PP} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}