import React from 'react';
import {
  TextInputProps,
  StyleSheet,
  TextInput as RNTextInput,
  View,
  ViewStyle,
} from 'react-native';
import Text from '@/app/components/Text';
import { moderateScale, scale, verticalScale } from '@/app/utils/Dimensions';
import Space from '@/app/components/Space';
import { Colors } from '@/app/constants/Colors';

interface IProps extends TextInputProps {
  label?: string;
  containerStyle?: ViewStyle;
}

const TextInput = (props: IProps) => {
  const { label, containerStyle } = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Space height={verticalScale(4)} />
      <RNTextInput style={[styles.textInputStyle, props.style]} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  containerStyle: {},
  textInputStyle: {
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    borderColor: Colors.light.inputBorder,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    paddingHorizontal: scale(6),
  },
  label: {
    width: '100%',
    textAlign: 'left',
  },
});
