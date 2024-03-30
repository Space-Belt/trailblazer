import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainStackNavigator from '../navigations/MainStackNavigator';

const RootStack = createStackNavigator();

const MainScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MainStack"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="MainStack" component={MainStackNavigator} />
    </RootStack.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
