import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CaninesScreen from './app/canines/CaninesScreen';
import RecipesScreen from './app/recipes/RecipesScreen';
import NutritionsScreen from './app/nutritions/NutritionsScreen';
import ProfileScreen from './app/profile/ProfileScreen';
import Profile from './app/profile/profile';
import Recipe from './app/recipe/recipes';
import Nutrition from './app/nutrition/nutrition'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Canines" component={CaninesScreen} />
        <Tab.Screen name="Recipes" component={Recipe} />
        <Tab.Screen name="Nutritions" component={Nutrition} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}