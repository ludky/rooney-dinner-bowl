import React, { Component } from 'react';
import {  FlatList, Text, View } from 'react-native';

let nutrition_data: Response | null | undefined;
/*
const getProfile = async () => {
  try {
    const response = await fetch(
      'https://ug1067tdk0.execute-api.us-east-1.amazonaws.com/test/dinner-bowl', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-key':''
        }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(response)
      return json.Item;
    })
  } catch (error) {
    console.error(error);
  }
};
*/

const getRooneyNutrion = () => {
    const response = fetch(
      'https://ug1067tdk0.execute-api.us-east-1.amazonaws.com/test/rooney-dinner-bowl/nutrition', {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'x-api-key':'2J5dJvLel92IFOhH6qRlM7lXGQuIA4FB4oEq9Ptr'
        }
      })
  .then(response => {
    if (response.status === 200) {
      console.debug("200");
      nutrition_data = response
      return response.json;
    } else {
      console.log("error")
      throw new Error('Something went wrong on API server!');
    }
  })
  .then(response => {
    console.debug(response);
  }).catch(error => {
    console.error(error);
  });
};




class Nutrition extends Component {

    componentDidMount() {
    getRooneyNutrion();
  }


  
  render() {
    return (
       <Text>Nutrition:  <br/>
        {nutrition_data?.json}
       </Text>
    );
  }
}

export default Nutrition;
//rooney: Canine = JSON.parse(canine);
console.log(nutrition_data);
