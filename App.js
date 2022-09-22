
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import DateTime from './components/DateTime';

const img = require('./assets/background.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
        <DateTime />
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
