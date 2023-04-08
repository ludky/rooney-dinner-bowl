import rooney from "./rooney.json"
import React, { Component } from 'react';
import {  FlatList, Text, View } from 'react-native';

interface Canine {
  "activity": number,
  "sortBy": string,
  "attrKey": string,
  "owner": string,
  "name": string,
  "weight": number,
  "age": number
}



let profile_data: Response | null | undefined;

const getRooneyProfile = () => {
    const response = fetch(
      'https://ug1067tdk0.execute-api.us-east-1.amazonaws.com/test/rooney-dinner-bowl/profile', {
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
      //profile_data = rooney;
      return response.json();
    } else {
      console.log("error")
      throw new Error('Something went wrong on API server!');
    }
  })
  .then(response => {
    console.debug(response);
    //profile_data = rooney;
    // …
  }).catch(error => {
    console.error(error);
  });
};




class Profile extends Component {

  componentDidMount() {
     const rooney_profile = getRooneyProfile();
     console.log(rooney_profile)
  }


  
  render() {
    return (
       <Text>Name: {rooney?.name} <br/>
       Owner: {rooney?.owner} <br/>
       Age: {rooney?.age} <br/> 
       Weight: {rooney?.weight} <br/> 
       Activity Level: {rooney?.activity} <br/>  
       </Text>
    );
  }
}

export default Profile;
//rooney: Canine = JSON.parse(canine);
console.log(profile_data);
