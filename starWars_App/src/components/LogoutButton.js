import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
