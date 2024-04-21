// DetailsScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { saveReminder } from '/Users/srisuryahemanthbalusu/Desktop/finalproject/MedicineReminderApp/utils/Storage.js';

const DetailsScreen = ({ navigation }) => {
  const [medicine, setMedicine] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleAddReminder = async () => {
    if (!medicine.trim() || !dosage.trim() || !time.trim()) {
      // Alert if any field is empty
      alert('Please fill in all fields.');
      return;
    }

    const reminder = { medicine, dosage, time };
    const saveResult = await saveReminder(reminder);

    if (saveResult) {
      navigation.goBack(); // Only navigate back if saving was successful
    } else {
      alert('Failed to save reminder. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Medicine:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMedicine}
        value={medicine}
        placeholder="Enter Medicine Name"
      />
      <Text style={styles.label}>Dosage:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDosage}
        value={dosage}
        placeholder="Enter Dosage"
      />
      <Text style={styles.label}>Time:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTime}
        value={time}
        placeholder="Enter Time"
      />
      <Button
        title="Save Reminder"
        onPress={handleAddReminder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Add more styles if needed
});

export default DetailsScreen;
