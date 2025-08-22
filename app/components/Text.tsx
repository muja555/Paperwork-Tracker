import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
// import { useFonts } from 'expo-font';
import { moderateScale } from '@/app/utils/Dimensions';
import { Colors } from '@/app/constants/Colors';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  fontFamily?: string;
}

const Text: React.FC<CustomTextProps> = ({
  children,
  fontFamily = 'Roboto',
  ...props
}) => {
  // Load custom font (replace 'Roboto-Regular' with your font file)
  // const [fontsLoaded] = useFonts({
  //   'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'), // Adjust path to your font file
  // });

  // Combine default styles with custom styles
  // const textStyle = [
  //   styles.text,
  //   { fontFamily: fontsLoaded ? fontFamily : 'System' }, // Fallback to system font
  //   style,
  // ];

  return (
    <RNText {...props} style={[styles.text, props.style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(16),
    color: Colors.light.text,
  },
});

export default Text;
