import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Button
        title="Login"
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      />

      <View style={{ marginVertical: 10 }} />

      <Button
        title="Register"
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    height: 100,
    width: 200,
    backgroundColor: "rgb(47, 62, 196)",
    fontSize: 20,
    color: "rgba(18, 124, 41, 0.6)"
  }
});