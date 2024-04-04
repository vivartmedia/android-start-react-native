import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './Components/NavbarComponent';
import StoriesComponent from './Components/StoriesComponent';
import FooterComponent from './Components/FooterComponent';
import PostComponent from './Components/PostComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
       <StoriesComponent/>
       <PostComponent/>
       <FooterComponent/>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
