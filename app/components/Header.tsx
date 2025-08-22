import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/app/constants/Colors';

interface IProps {
  viewStyle?: StyleProp<ViewStyle>;
}

const Header = ({ viewStyle }: IProps) => {
  return (
    <View style={[styles.header, viewStyle]}>
      <Link href={'/'} style={styles.icon}>
        <Entypo name="chevron-right" size={24} color={Colors.light.text} />
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'flex-start',
  },
  icon: {},
});
