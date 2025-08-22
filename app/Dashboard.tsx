import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@/app/constants/Colors';
import { scale } from '@/app/utils/Dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {}

const Dashboard = (props: IProps) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingHorizontal: scale(24),
  },
});
