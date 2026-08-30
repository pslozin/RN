import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, useWindowDimensions, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { HomeScreen } from './components/Homescreen.jsx';
import { ProfileScreen } from './components/Profilescreen.jsx';
import { Alldata } from './components/Alldata.jsx';
import UserDetails from './components/UserDetails.jsx';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';

import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


import Slozin from './components/Slozin.jsx'


let userInfo = {
    firstname: '',
    lastname: ''
}

function showAlert(message) {
  
    window.alert(message);
 
}

function showText(){
  showAlert('Simple Button pressed')
}

//

export default function App() {


  const [count, setCount] = useState(0);
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userName, setUsername] = useState('Slozin')


  function MainTabs() {
    
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Alldata" component={Alldata} />
    </Tab.Navigator>
  );
}




function onFirstNameChangeHandler(text) {
        
       setUserFirstName(text);
      console.log(text);
        // setEmail(e.target.value)
        //setUserNameForm(e.target.value)
        //console.log(e.target.value)
    }
function onLastNameChangeHandler(text) {
        //setEmail(e.target.value)
       
        setUserLastName(text)
        console.log(text);
    }

/*function onFormSend (){
        userInfo.firstname = userFirstName
        userInfo.lastname = userLastName
        console.log(userInfo.firstname,userInfo.lastname)
        setUserFirstName('')
        console.log('CLEAR COMMAND SENT');
    }
*/

/*function onSendUserInfo()
{

        userInfo.firstname = userFirstName
        userInfo.lastname = userLastName

if(userInfo.firstname.length === 0 || userInfo.lastname.length === 0)

        {
        alert('FIRST NAME CANT BE EMPTY')
        }

        console.log(userInfo.firstname,userInfo.lastname)

axios.post('http://129.213.82.233:4000/api/userinfotodb', userInfo).then(function (response){})

         setUserFirstName('')
        console.log('CLEAR COMMAND SENT');
  
}
        */


  function getUserinfo() {

  console.log('PRESSED'); 

  //axios.get('http://192.168.0.29:4000/api/userinfo')
  axios.get('http://129.213.82.233:4000/api/userinfo')
    .then(function (response) {
      console.log('SERVER RESPONSE:', response.data);
     setUsername(response.data.message)
     // userInfo.username = response.data.message;
     // console.log('PHILIP:', userInfo.username);
    })
    .catch(function (error) {
      console.error('STATUS:', error.response?.status);
      console.error('DATA:', error.response?.data);
    });
    
}


useEffect(() => {

  fetch('http://129.213.82.233:4000/api/data')
    .then((response) => {
      console.log("STATUS:", response.status);
      console.log("CONTENT TYPE:", response.headers.get("content-type"));
      return response.text();
    })
    .then((text) => {
      console.log("RAW RESPONSE:", JSON.stringify(text));

      if (!text) {
        throw new Error("Server returned an empty response");
      }

      const json = JSON.parse(text);
      console.log("JSON:", json);

      //setData(json.message);
      //setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, []);

  return (

  <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );


  
}


