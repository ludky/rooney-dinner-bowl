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


/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Profile from './app/profile/profile';
import Recipe from './app/recipe/recipes';
import Nutrition from './app/nutrition/nutrition'

const CaninesRoute = () => (
  <View style={{flex: 1 }}> <Profile /> </View>

);

const RecipesRoute = () => (
  <View style={{ flex: 1 }} > <Recipe />  </View>
);

const NutritionRoute = () => (
  <View style={{ flex: 1 }}><Nutrition /> </View>
);

const renderScene = SceneMap({
  canines: CaninesRoute,
  recipes: RecipesRoute,
  nutrition: NutritionRoute,
});



export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'canines', title: 'Canines' },
    { key: 'recipes', title: 'Recipes' },
    { key: 'nutrition', title: 'Nutrition' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/