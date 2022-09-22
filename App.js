import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const img = require('./assets/background.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex:1, 
    resizeMode:"cover",
    justifyContent:"center",
  },
});
