import React from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, TextInput, Button, useWindowDimensions, TouchableOpacity, FlatList, Alert,
    } from 'react-native';


//import { Host, Button, Text } from '@expo/ui/jetpack-compose';

import styles from '../styles/styles';

export default function UserDetails({route, navigation}) {

   const { userid, firstname } = route.params;

function deleteUser ()
{

   axios.post('http://129.213.82.233:4000/api/deleteuser', {userid})
    .then(function (response) {
    console.log('SERVER RESPONSE:', response.data);
     Alert.alert(
        'Success',
        'USER DELETED',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          }
        ]
      );
    })
    .catch(function (error) {
      console.error('STATUS:', error.response?.status);
      console.error('DATA:', error.response?.data);
    });
  
}


 

  return (
    <View>
      <Text>User ID: {userid}, UserName {firstname}</Text>
          <TouchableOpacity
        style={styles.subButton}
        onPress={deleteUser}
        
      >
        <Text style={styles.buttonText}>
          DELETE USER
        </Text>
        
      </TouchableOpacity>
    </View>
  );
}


