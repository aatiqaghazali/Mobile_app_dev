import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Cat from "./components/cat"
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello world</Text>
        <Cat></Cat>
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
