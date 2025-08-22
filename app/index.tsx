import { StyleSheet, View } from 'react-native';
import { defaultShadow } from '@/app/constants/Shadows';
import TextInput from '@/app/components/TextInput';
import { useState } from 'react';
import Space from '@/app/components/Space';
import Text from '@/app/components/Text';
import { moderateScale, scale, verticalScale } from '@/app/utils/Dimensions';
import Button from '@/app/components/Button';
import { Colors } from '@/app/constants/Colors';
import { Link, router } from 'expo-router';
import Checkbox from '@/app/components/Checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);

  const onPressLogin = () => {
    router.replace('/(tabs)/(ordersStack)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contents}>
        <TextInput
          label={'رقم الجول (يبدأ بـ 05)'}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType={'phone-pad'}
        />
        <Space height={verticalScale(12)} />
        <TextInput
          label={'كلمة المرور'}
          value={password}
          onChangeText={setPassword}
        />
        <Space height={verticalScale(12)} />
        <Checkbox
          labelText={'تذكرني'}
          isChecked={remember}
          setChecked={setRemember}
        />
        <Space height={verticalScale(20)} />
        <Button title={'تسجيل الدخول'} onPress={onPressLogin} />

        <Space height={verticalScale(24)} />
        <View style={styles.line} />
        <Space height={verticalScale(36)} />

        <View style={styles.noAccountRow}>
          <Text>لا يوجد لديك حساب؟</Text>
          <Space height={verticalScale(5)} />
          <Link href={'/CreateAccountPage'}>
            <Text style={styles.enterGuess}>انشئ طلب لتتبع معاملتك الآن</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    paddingHorizontal: scale(24),
  },
  contents: {
    width: '100%',
    backgroundColor: Colors.light.surface,
    padding: moderateScale(24),
    paddingVertical: verticalScale(42),
    borderRadius: moderateScale(12),
    ...defaultShadow,
  },
  line: {
    height: verticalScale(1),
    width: '100%',
    backgroundColor: Colors.light.border,
  },
  noAccountRow: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  enterGuess: {
    fontSize: moderateScale(16),
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: Colors.light.primary,
  },
});
