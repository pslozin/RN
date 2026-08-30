import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, useWindowDimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/styles.js';

import axios from 'axios';



import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function HomeScreen() {

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  

  function onFirstNameChangeHandler(text) {
    setUserFirstName(text);
    console.log('FIRST:', text);
  }

  function onLastNameChangeHandler(text) {
    setUserLastName(text);
    console.log('LAST:', text);
  }

  function onSendUserInfo() {

    const userInfo = {
      firstname: userFirstName,
      lastname: userLastName
    };

    if (
      userInfo.firstname.length === 0 ||
      userInfo.lastname.length === 0
    ) {
      alert('FIRST NAME AND LAST NAME CANT BE EMPTY');
      return;
    }

    console.log('SENDING:', userInfo);

    axios.post(
      'http://129.213.82.233:4000/api/userinfotodb',
      userInfo
    )
    .then(response => {
      console.log('SERVER RESPONSE:', response.data);
    setUserFirstName('')
    setUserLastName('')

    })
    .catch(error => {
      console.error('POST ERROR:', error);
    if(error.message === 'Network Error'){
        console.log('ERROR')
        alert('NETWORK ERROR')
    }
      

  if (error.response) {
    // Server responded with an error status
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
  } else if (error.request) {
    // Request was sent but no response received
    console.error('No response:', error.request);
  } else {
    // Something went wrong setting up the request
    console.error('Message:', error.message);
  }
    });

  
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        maxLength={50}
        value={userFirstName}
        onChangeText={onFirstNameChangeHandler}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        maxLength={50}
        value={userLastName}
        onChangeText={onLastNameChangeHandler}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSendUserInfo}
      >
        <Text style={styles.buttonText}>
          SEND DATA
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}



//



