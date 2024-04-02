import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './Components/NavbarComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      {/* <StoriesComponent/>
      <NavbarComponent/>
      <NavbarComponent/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
