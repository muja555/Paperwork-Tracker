import { Stack } from 'expo-router';
import React from 'react';

export default function OrdersStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide header to match tab's headerShown: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="CreateOrder" />
    </Stack>
  );
}
