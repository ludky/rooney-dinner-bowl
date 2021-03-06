import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Profile from './app/profile/profile';
import Recipe from './app/recipe/recipes';
import Nutrition from './app/nutrion/nutrion'
//import rooney from "./app/profile/rooney.json"

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
