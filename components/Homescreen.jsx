import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, useWindowDimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/styles.js';


import axios from 'axios';



import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer, useNavigation, useFocusEffect  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export function HomeScreen() {

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  const navigation = useNavigation();
  const [success, setSuccess] = useState(false);
  
  

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

useFocusEffect(
  useCallback(() => {
    setSuccess(false);

    fetch('http://129.213.82.233:4000/api/data')
      .then((response) => {
        console.log('STATUS:', response.status);

        if (response.status === 200) {
          console.log('Connection established');
          setSuccess(true);
        } else {
          console.log('Server responded with:', response.status);
        }
      })
      .catch((error) => {
        console.error('Connection failed:', error);
        setSuccess(false);
      });
  }, [])
);

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
      <Text style={styles.about, styles.link}
      onPress={() => navigation.navigate('About')}>About</Text>
     <Text>Status: {success ? "success" : "failed"}</Text>

      <StatusBar style="auto" />

    </View>
  );
}



//



