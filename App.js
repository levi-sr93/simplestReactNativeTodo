import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter Todo Item"
          style={styles.textInput}
          onChangeText={text => setTodoItem(text)}
          value={todoItem}
        />
        <Button title="Add Todo" onPress={addTodoList} />
      </View>
      <ScrollView>
        {todoList.map(todo => (
          <View key={todo} style={styles.todoItem}>
            <Text>{todo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  textInput: {
    padding: 10,
    borderColor: '#000000',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#C4DBE7',
    overflow: 'hidden'
  }
});
