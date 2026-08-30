import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, useWindowDimensions, TouchableOpacity, FlatList,
    } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect, useNavigation  } from '@react-navigation/native';

import UserDetails from './UserDetails.jsx';


import axios from 'axios';


import styles from '../styles/styles.js';






export function Alldata() {

      const [alldbdata, setAlldbdata] = useState([]); 
        const navigation = useNavigation();

        useFocusEffect(
        useCallback(() => {

      return () => {
        // Clear all database data when leaving this tab
        setAlldbdata([]);
      };

    }, [])
  );

function getAllDbBdata() {


  //console.log('PRESSED'); 

  //axios.get('http://192.168.0.29:4000/api/userinfo')
  axios.get('http://129.213.82.233:4000/api/alldbdata')
    .then(function (response) {
    console.log('SERVER RESPONSE:', response.data);
     setAlldbdata(response.data)
     
     console.log('ALL DATA:', alldbdata);
    })
    .catch(function (error) {
      console.error('STATUS:', error.response?.status);
      console.error('DATA:', error.response?.data);
    });
    
}



  return (
    <View style={styles.container}>
      
      
         <TouchableOpacity
        style={styles.button}
        onPress={getAllDbBdata}
       
      >
        <Text style={styles.buttonText}>
          GET DATA
        </Text>
        
      </TouchableOpacity>
      <FlatList
  data={alldbdata}
  keyExtractor={(item) => item.userid.toString()}
  renderItem={({ item }) => (
    <View>
      <Text style={styles.userText}>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('UserDetails', {
            userid: item.userid, firstname: item.firstname, 
          })}
        >
          {item.userid}
        </Text>
        {' - '}
        {item.userid} - {item.firstname} {item.lastname}
      </Text>
    </View>
  )}
/>
      
    </View>
  );
}