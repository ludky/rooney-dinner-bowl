import rooney from "./rooney.json"
import React, { Component } from 'react';
import {  Text } from 'react-native';



class Profile extends Component {
  render() {
    return (
      <Text> {rooney.name} </Text>
    );
  }
}

export default Profile;
//rooney: Canine = JSON.parse(canine);
//console.log(canine);
//console.log(rooney);



export const Canine = (name: string, owner: string, age: number, weight: number, activity: number) => {
    return ({ name: name, owner: owner, age: age, weight: weight, activity: activity });
}