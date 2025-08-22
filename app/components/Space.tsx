import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IProps {
  height?: number;
  width?: number;
}

const Space = ({ height, width }: IProps) => {
  return (
    <View style={[height ? { height } : null, width ? { width } : null]} />
  );
};

export default Space;

const styles = StyleSheet.create({});
