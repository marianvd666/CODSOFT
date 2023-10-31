import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';

//Tasks:
import Tasks from './src/components/Tasks';
//TILL
const App = () => {
  const [task, setTask] = useState(); // use state for the things that chnage often in the app. task =state

  const [tastItems, setTaskItems] = useState([]);

  const handleAdddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...tastItems, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemsCopy = [...tastItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/*  todays task title*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>  Tasks You Get to Do:</Text>

          {/*  tasks list */}
          <View style={styles.items}>
            {/* itrate over the array and addtasks  */}
            {tastItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write Tasks */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

      <KeyboardAvoidingView
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writetasksWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write your Tasks:'}
          placeholderTextColor={'#68376c'} // Specify your desired color here
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAdddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8d3e8',
    alignItems: 'center',
  },

  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#68376c',
  },

  items: {
    marginTop: 20,
    width:'100%'
  },

  writetasksWrapper: {
    position: 'absolute', // position it wherever we want on screen
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around', // closer together
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#68376c',
    borderWidth: 1,
    width: 250,
    color: '#68376c',
  },
  addWrapper: {
    width: 60,
    height: 60,
 //   backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#68376c',
    borderWidth: 1,
  },
  addtext: {
    color:'#68376c',
    fontWeight:'bold',
    fontSize:30
  },
});

export default App;
