import { Tabs } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/app/components/HapticTab';
import Octicons from '@expo/vector-icons/Octicons';
import TabBarBackground from '@/app/components/ui/TabBarBackground';
import { Colors } from '@/app/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { moderateScale, verticalScale } from '@/app/utils/Dimensions';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="(ordersStack)"
        options={{
          title: 'تقعيبات',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="file-document-multiple-outline"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'حسابي',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ color }) => (
            <Octicons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    marginTop: verticalScale(5),
    fontSize: moderateScale(15),
  },
});
