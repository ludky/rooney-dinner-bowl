import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const CaninesRoute = () => (
  <View style={{ flex: 1}} />
);

const RecipesRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  canines: CaninesRoute,
  recipes: RecipesRoute,
});



export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'canines', title: 'Canines' },
    { key: 'recipes', title: 'Recipes' },
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
