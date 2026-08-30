import React from 'react';
import { View, Text } from 'react-native';

export default function UserDetails({ route }) {
  const { userid, firstname } = route.params;

  return (
    <View>
      <Text>User ID: {userid}, UserName {firstname}</Text>
    </View>
  );
}


