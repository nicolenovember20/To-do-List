import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation, setUserData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (email && password) {
      setErrorMessage('');
      setUserData({ email, password });  // Store user data locally in App state
      alert('Registration Successful!');
      navigation.navigate('Login');
    } else {
      setErrorMessage('Please fill all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamer Register</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#00FF00" // Neon green placeholder
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#00FF00" // Neon green placeholder
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#00FF00" // Neon green placeholder
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#00FF00', // Neon green title
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace', // Futuristic font style
  },
  input: {
    height: 50,
    borderColor: '#00FF00', // Neon green border
    borderWidth: 2,
    borderRadius: 10,
    color: '#FFFFFF', // White text
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#00FF00', // Neon green button
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#1a1a1a', // Dark text for contrast
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  linkText: {
    color: '#00FF00', // Neon green link
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'monospace',
  },
  errorText: {
    color: '#FF0000', // Red for error message
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default RegisterScreen;
