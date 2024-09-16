import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete daily quest' },
    { id: '2', title: 'Reach level 10 in FPS game' },
    { id: '3', title: 'Win 3 matches in Battle Royale' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }
    const newTaskObj = { id: Date.now().toString(), title: newTask };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => removeTask(item.id)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gaming To-Do List</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.taskList}
      />

      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        placeholderTextColor="#666"
        value={newTask}
        onChangeText={setNewTask}
      />

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#00FF00',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'monospace',
  },
  taskList: {
    width: '100%',
    marginBottom: 20,
  },
  taskContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    color: '#FFF',
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#00FF00',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
});

export default DashboardScreen;
