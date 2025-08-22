import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from '@/app/components/Text';
import { moderateScale, verticalScale } from '@/app/utils/Dimensions';
import { Colors } from '@/app/constants/Colors';

interface IProps {
  title: string;
  textColor?: string;
  onPress?: () => void;
  textStyle?: TextStyle;
  btnStyle?: ViewStyle;
}

const Button = (props: IProps) => {
  const { title, textStyle, btnStyle, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, btnStyle]}>
      <Text style={[styles.innerText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(16),
    backgroundColor: Colors.light.tint,
  },
  innerText: { color: Colors.light.background },
});
