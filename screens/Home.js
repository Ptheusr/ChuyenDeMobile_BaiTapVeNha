

import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Home</Text>

      <Button title="Task 1 - Auth Screens" onPress={() => navigation.navigate('Task1')} />
      <View style={{ height: 10 }} />
      <Button title="Task 2 - API List" onPress={() => navigation.navigate('Task2')} />
    </View>
  );
}
