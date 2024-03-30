import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomStackNavigator from '../navigations/BottomStackNavigator';

const RootStack = createStackNavigator();

const MainScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MainStack"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="BottomStackNavigator"
        component={BottomStackNavigator}
      />
    </RootStack.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
