import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/authentication/SingIn';
import SignUpScreen from '../screens/authentication/SingUp';
import HomeScreen from '../screens/Home';
import useAuthStore from '../contexts/authStore';
import AppRoutes from './app.routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const user = useAuthStore((state) => state.user);

  return (
  <>
      {user ? (
        <AppRoutes/>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
      </>
  );  
};


export default Navigation;
