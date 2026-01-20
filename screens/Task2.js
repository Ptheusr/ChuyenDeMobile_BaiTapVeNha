import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function Task2Screen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>User id: {item.userId}</Text>
      <Text>Id: {item.id}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Completed: {item.completed ? 'true' : 'false'}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E3B06D',
    padding: 15,
    marginBottom: 15,
    borderRadius: 6,
    borderWidth: 1,
  },
});
