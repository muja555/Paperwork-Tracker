import React from 'react';
import { View, StyleSheet, TextStyle } from 'react-native';
import ExpoCheckbox from 'expo-checkbox';
import Text from '@/app/components/Text';
import { scale } from '@/app/utils/Dimensions';

interface IProps {
  labelText?: string;
  labelStyle?: TextStyle;
  isChecked?: boolean;
  setChecked?: (checked: boolean) => void;
}

const Checkbox = ({ labelText, labelStyle, isChecked, setChecked }: IProps) => {
  return (
    <View style={styles.container}>
      <ExpoCheckbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      />
      <Text style={labelStyle}>{labelText}</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkbox: {
    margin: 0,
    marginEnd: scale(5),
  },
});
