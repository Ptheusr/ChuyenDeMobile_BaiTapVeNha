import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Task2 from './screens/Task2';
import Task1 from './screens/Task1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Task2" component={Task2} options={{ title: 'Task 2' }} />
        <Stack.Screen name="Task1" component={Task1} options={{ title: 'Task 1' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
