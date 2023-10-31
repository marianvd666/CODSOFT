import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Tasks = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      {/* <View style={styles.circular}></View> */}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent: 'space-between',
    marginBottom: 20,
    // marginLeft: 10,
    // marginRight: 10,
  //maxWidth:'auto',
    borderColor: '#68376c',
    borderWidth: 1,
  
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderColor: '#68376c',
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: '#68376c',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    borderColor: '#68376c',
    borderWidth: 1,
  },
  itemText: {
    maxWidth: '80%',
    color: '#68376c', 
  },
  // circular: {
  //   width: 12,
  //   height: 12,
  //   borderColor: '#68376c',
  //   borderWidth: 2,
  //   borderRadius: 5,
  // },
});
