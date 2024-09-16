import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      {/* Display Profile Information */}
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Ralph Ociones R.</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>ocionesralph300@gmail.com</Text>

        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>Ociones300</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Dashboard</Text>
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
  profileContainer: {
    width: '80%',
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    color: '#00FF00',
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00FF00',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
});

export default ProfileScreen;
