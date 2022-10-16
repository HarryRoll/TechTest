import { Button, StyleSheet, Text, View, Alert, StatusBar } from 'react-native';

import Header from './component/Header';
import Menu from './component/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#61dafb" />
      <Header
        logo="Juna Restaurant"
        cart="cart"
      />
      <Menu/>
      <Text>Hello</Text>
      <Text style={styles.test}>hello3df</Text>
      <Button
        style={styles.test}
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        style={styles.test}
        title="profesi"
        onPress={() => Alert.prompt('apakah anda seorang dokter?')}
      />
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
