// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobList from './JobList';
import ApplyJobScreen from './ApplyJobScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobList">
        <Stack.Screen name="JobList" component={JobList} options={{ title: 'Vagas de Emprego' }} />
        <Stack.Screen name="ApplyJob" component={ApplyJobScreen} options={{ title: 'Enviar Currículo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
