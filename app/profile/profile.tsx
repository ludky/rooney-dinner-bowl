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
console.log(rooney);
