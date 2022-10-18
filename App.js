import { Button, StyleSheet, Text, View, Alert, StatusBar } from 'react-native';

import Header from './component/Header';
import Menu from './component/Menu';
import Footer from './component/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#61dafb" />
      <Header
        logo="Juna Restaurant"
        cart="cart"
      />
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  test: {
    backgroundColor: 'red',
    color : 'white',
    borderRadius : 20,
    border : 2,
    borderColor : "black",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
