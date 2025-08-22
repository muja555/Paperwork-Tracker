import { StyleSheet, View } from 'react-native';
import { Colors } from '@/app/constants/Colors';
import { moderateScale, scale, verticalScale } from '@/app/utils/Dimensions';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { defaultShadow } from '@/app/constants/Shadows';
import Space from '@/app/components/Space';
import TextInput from '@/app/components/TextInput';
import { useState } from 'react';
import Button from '@/app/components/Button';
import Header from '@/app/components/Header';

const CreateAccountPage = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const onPressRegister = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        viewStyle={[styles.header, { top: insets.top ?? verticalScale(10) }]}
      />
      <View style={styles.contents}>
        <Space height={verticalScale(24)} />
        <TextInput
          label={'الاسم الاول'}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Space height={verticalScale(12)} />
        <TextInput
          label={'الاسم الاخير'}
          value={lastName}
          onChangeText={setLastName}
        />
        <Space height={verticalScale(12)} />
        <TextInput
          label={'رقم الجول (يبدأ بـ 05)'}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType={'phone-pad'}
        />
        <TextInput
          label={'كلمة المرور'}
          value={password}
          onChangeText={setPassword}
        />
        <Space height={verticalScale(12)} />
        <TextInput
          label={'كلمة المرور مرة اخرى'}
          value={secondPassword}
          onChangeText={setSecondPassword}
        />
        <Space height={verticalScale(12)} />
        <Space height={verticalScale(36)} />
        <Button title={'انشئ حساب'} onPress={onPressRegister} />
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(10),
    backgroundColor: Colors.light.background,
  },
  header: {
    position: 'absolute',
  },
  contents: {
    width: '100%',
    backgroundColor: Colors.light.surface,
    padding: moderateScale(24),
    paddingVertical: verticalScale(16),
    borderRadius: moderateScale(16),
    ...defaultShadow,
  },
});
