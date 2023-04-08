import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchData } from '../api/util';

interface Canine {
  activity: number,
  owner: string,
  name: string,
  weight: number,
  age: number
}

const CaninesScreen = () => {
  const [data, setData] = useState<Canine>();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData('profile', 'GET');
      setData(result.body.Item);
    };
    fetchDataAsync();
  }, []);

  return (
    <View>
      <Text>Canines Screen</Text>
      {data ? (
        <View>
          <Text>Activity: {data.activity}</Text>
          <Text>Owner: {data.owner}</Text>
          <Text>Name: {data.name}</Text>
          <Text>Weight: {data.weight}</Text>
          <Text>Age: {data.age}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default CaninesScreen;

