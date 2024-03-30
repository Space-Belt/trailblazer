import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();

const BottomStackNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: '홈'}}
      />
    </BottomTab.Navigator>
  );
};

export default BottomStackNavigator;

const styles = StyleSheet.create({});
