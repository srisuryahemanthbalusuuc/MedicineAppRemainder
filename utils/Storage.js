// Storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const REMINDERS_KEY = 'REMINDERS_KEY';

export const getReminders = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(REMINDERS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error fetching reminders', e);
    return []; // If there's an error, return an empty array
  }
};

export const saveReminder = async (newReminder) => {
  try {
    const currentReminders = await getReminders();
    const newReminders = [...currentReminders, newReminder];
    const jsonValue = JSON.stringify(newReminders);
    await AsyncStorage.setItem(REMINDERS_KEY, jsonValue);
    return true; // Indicate success
  } catch (e) {
    console.error('Error saving reminder', e);
    return false; // Indicate failure
  }
};

export const deleteReminder = async (index) => {
  try {
    const reminders = await getReminders();
    reminders.splice(index, 1); // Remove the reminder at the specified index
    const jsonValue = JSON.stringify(reminders);
    await AsyncStorage.setItem(REMINDERS_KEY, jsonValue);
    return true; // Indicate success
  } catch (e) {
    console.error('Error deleting reminder', e);
    return false; // Indicate failure
  }
};

export const clearAllReminders = async () => {
  try {
    await AsyncStorage.removeItem(REMINDERS_KEY);
    return true; // Indicate success
  } catch (e) {
    console.error('Error clearing reminders', e);
    return false; // Indicate failure
  }
};
