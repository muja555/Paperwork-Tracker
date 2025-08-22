import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/app/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from '@/app/utils/Dimensions';
import Header from '@/app/components/Header';
import Space from '@/app/components/Space';
import Entypo from '@expo/vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import Text from '@/app/components/Text';

type DropDownItem = {
  value: string;
  label: string;
};
interface IProps {}

const OrderTypes = [
  {
    value: 'or',
    label: 'مخ',
  },
  {
    value: '2',
    label: 'يسيشش',
  },
];
const CreateOrder = (props: IProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Space height={verticalScale(20)} />

      <RNPickerSelect
        items={OrderTypes}
        value={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        placeholder={{
          label: 'اختر خدمة',
          value: null,
        }}
        style={{
          inputIOS: {
            textAlign: 'right',
            fontSize: moderateScale(16),
            paddingVertical: verticalScale(12),
            paddingHorizontal: scale(10),
            borderWidth: moderateScale(1),
            borderColor: Colors.light.inputBorder,
            borderRadius: moderateScale(8),
            color: Colors.light.text,
            paddingRight: scale(30), // to ensure the text is never behind the icon
          },
          inputAndroid: {
            textAlign: 'right',
            fontSize: moderateScale(16),
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(8),
            borderWidth: moderateScale(1),
            borderColor: Colors.light.inputBorder,
            borderRadius: moderateScale(8),
            color: Colors.light.text,
            paddingRight: scale(30), // to ensure the text is never behind the icon
          },
          // viewContainer: {
          //   alignSelf: 'flex-start',
          //   borderColor: Colors.light.inputBorder,
          //   borderWidth: moderateScale(1),
          //   alignItems: 'center',
          //   justifyContent: 'center',
          //   //width: scale(180),
          //   width: '100%',
          //   height: verticalScale(40),
          //   borderRadius: moderateScale(8),
          // },
          // iconContainer: {
          //   // marginEnd: scale(40),
          // },
          // placeholder: {
          //   fontSize: moderateScale(12),
          //   marginEnd: '65%',
          //   textAlign: 'right',
          // },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => (
          <Entypo
            name="chevron-down"
            size={24}
            color="black"
            style={{
              top: verticalScale(12),
              left: -scale(30),
              position: 'absolute',
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CreateOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: scale(24),
  },
  header: {
    position: 'absolute',
    width: '100%',
  },
  icon: {
    transform: [{ scaleX: -1 }],
  },
});
