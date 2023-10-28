import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
}


