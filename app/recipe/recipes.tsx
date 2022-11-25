import recipe from "./chicken-rice.json"
import React, { Component } from 'react';
import {  FlatList, Text, View } from 'react-native';

let profile_data: Response | null | undefined;
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
/*
const getRooneyRecipe = () => {
    const response = fetch(
      'https://ug1067tdk0.execute-api.us-east-1.amazonaws.com/test/dinner-bowl', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'x-api-key':''
        }
      })
  .then(response => {
    if (response.status === 200) {
      console.debug("200");
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

*/


class Recipe extends Component {

  componentDidMount() {
     //getRooneyProfile();
  }


  
  render() {
    return (
       <Text>Recipe:  <br/>
       Protien: Chicken {recipe?.protien.chicken}g <br/>
       Protien: Egg {recipe?.protien.egg}g <br/>
       Carb: Rice {recipe?.carb.rice}g <br/> 
       Carb: Sweet Potatoes {recipe?.carb["sweet potatoes"]}g <br/> 
       Veggies: Carrots {recipe?.veggies.carrots}g<br/> 
       Veggies: Cabbages {recipe?.veggies.cabbages}g<br/>
       Veggies: Spinach {recipe?.veggies.spinach}g<br/>  
       Fruits: N/A <br/>  
       </Text>
    );
  }
}

export default Recipe;
//rooney: Canine = JSON.parse(canine);
console.log(profile_data);
