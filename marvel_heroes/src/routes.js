import React from 'react';
import {View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './pages/Home';

import {colors} from './styles/index';
import HamburguerIcon from './assets/icons/menu.svg';
import MarvelIcon from './assets/icons/marvel.svg';
import SearchIcon from './assets/icons/search.svg';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primarySilver,
          },
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerLeft: (props) => (
            <HamburguerIcon
              {...props}
              onPress={() => {
                // Do something
              }}
            />
          ),
          headerTitleStyle: {alignSelf: 'center'},
          headerTitle: (props) => (
            <MarvelIcon {...props}>
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}></LinearGradient>
            </MarvelIcon>
          ),
          headerRightContainerStyle: {
            padding: 10,
          },
          headerRight: (props) => (
            <SearchIcon
              {...props}
              onPress={() => {
                // Do something
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
