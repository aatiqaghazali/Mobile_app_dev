import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Cat from "./components/cat"
import Dog from './components/dog';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello world</Text>
        <Cat></Cat>
        <Dog name="percy"></Dog>
        <Dog name="Jackson"></Dog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
