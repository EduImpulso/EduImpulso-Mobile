import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './src/components/Login/'
import Noticias from './src/components/Noticias/'
import Home from './src/components/Home/'

export default function App() {

  const Tab = createBottomTabNavigator();

  return (

  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Noticias') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#8A2BE2',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Noticias" component={Noticias} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>

  </NavigationContainer>

  );
}
