import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { RootNavigator } from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />

    </Provider>
    
  );
}


