// DrawerContent.js
import React from 'react';
//import { View, Text, TouchableOpacity, Stylesheet } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const DrawerContent = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Text style={styles.drawerText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
 drawerText:{
  fontSize: 20, 
  color: 'black',
 },

});

export default DrawerContent;
