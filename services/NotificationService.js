// NotificationService.js

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const scheduleNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Time to take your medicine!",
      body: 'Don’t forget your pills.',
    },
    trigger: { seconds: 3600, repeats: true },
  });
};
