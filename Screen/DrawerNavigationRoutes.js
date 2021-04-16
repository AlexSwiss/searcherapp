// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import ProfileScreen from './DrawerScreens/ProfileScreen';
import AddScreen from './DrawerScreens/AddScreen';
import ItemScreen from './DrawerScreens/ItemScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{
        headerRight: () => <Icon name="sign-out" size={30} color="#9575cd" />}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, elevation: 0},
          headerTintColor: '#4527a0',
          headerTitleStyle: {alignSelf: 'center'}
        }}

      />
      <Stack.Screen 
        name="ItemScreen"
        component={ItemScreen}
        options={{
          title: 'Details', //Set Header Title
          headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, elevation: 0},
          headerTintColor: '#4527a0',
          headerTitleStyle: {alignSelf: 'center'}
        }}
      />
    </Stack.Navigator>
  );
};

const addScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          title: 'Add', //Set Header Title
          headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, elevation: 0},
          headerTintColor: '#4527a0',
          headerTitleStyle: {alignSelf: 'center'}
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerStyle: { backgroundColor: 'white', borderBottomWidth: 0, elevation: 0},
          headerTintColor: '#4527a0',
          headerTitleStyle: {alignSelf: 'center'}
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Tab.Navigator
    tabBarOptions={{ 
      showLabel: false,
      activeTintColor: '#cee1f2',
      style: { backgroundColor: '#4527a0', borderTopWidth: 0}
     }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="homeScreenStack"
        component={homeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="#9575cd" />
          ),
        }}
      />
      <Tab.Screen
        name="addScreenStack"
        component={addScreenStack}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus-square-o" size={30} color="#9575cd" />
          ),
        }}
      />
      <Tab.Screen
        name="profileScreenStack"
        component={profileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-o" size={30} color="#9575cd" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};   

export default DrawerNavigatorRoutes;
