import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation, userData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (userData && email === userData.email && password === userData.password) {
      setErrorMessage('');
      navigation.navigate('Dashboard'); // Navigate to Dashboard after login
    } else {
      setErrorMessage('Invalid email or password');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamer Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
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

export default LoginScreen;
