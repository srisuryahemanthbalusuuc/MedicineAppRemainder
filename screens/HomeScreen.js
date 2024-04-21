// HomeScreen.js
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { getReminders, clearAllReminders, deleteReminder } from '/Users/srisuryahemanthbalusu/Desktop/finalproject/MedicineReminderApp/utils/Storage.js';

const HomeScreen = ({ navigation }) => {
  const [reminders, setReminders] = useState([]);

  const loadReminders = async () => {
    const loadedReminders = await getReminders();
    setReminders(loadedReminders || []);
  };

  useFocusEffect(
    useCallback(() => {
      loadReminders();
    }, [])
  );

  const handleClearReminders = async () => {
    await clearAllReminders();
    await loadReminders(); // Refresh the reminders list after clearing
  };

  const handleDeleteReminder = async (index) => {
    await deleteReminder(index); // Pass the index of the reminder to delete
    await loadReminders(); // Refresh the reminders list after deleting
  };

  return (
    <View style={styles.container}>
      {reminders.length === 0 && (
        <Text style={styles.watermark}>No Medicine Reminder added</Text>
      )}
      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>Medicine: {item.medicine}</Text>
            <Text>Dosage: {item.dosage}</Text>
            <Text>Time: {item.time}</Text>
            <Button
              title="Delete"
              onPress={() => handleDeleteReminder(index)}
              color="#FF6347"
            />
          </View>
        )}
      />
      <Button
        title="Add Reminder"
        onPress={() => navigation.navigate('AddReminders')} // Changed to 'AddReminders' to match your App.js file
      />
      <Button
        title="Clear All Reminders"
        onPress={() => 
          Alert.alert(
            'Confirm',
            'Are you sure you want to clear all reminders?',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'OK', onPress: handleClearReminders },
            ],
            { cancelable: false }
          )
        }
        color="#FF6347"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    fontSize: 18,
    color: 'grey',
  },
});

export default HomeScreen;
