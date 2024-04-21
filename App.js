// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '/Users/srisuryahemanthbalusu/Desktop/finalproject/MedicineReminderApp/screens/HomeScreen.js';
import DetailsScreen from '/Users/srisuryahemanthbalusu/Desktop/finalproject/MedicineReminderApp/screens/DetailsScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Medicine Reminder' }}
        />
        <Stack.Screen
          name="AddReminders"
          component={DetailsScreen}
          options={{ title: 'Add Reminder' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
